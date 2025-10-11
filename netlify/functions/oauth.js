// Router for three endpoints:
//  - /oauth           -> authorize (redirect to Auth0)
//  - /callback        -> handle Auth0 code, set session cookie
//  - /token           -> verify session, mint GitHub installation token

import * as jwt from "jsonwebtoken";

const appBaseUrl = (event) => {
  const proto = event.headers["x-forwarded-proto"] || "https";
  const host = event.headers.host;
  return `${proto}://${host}`;
};

function parseCookies(header) {
  const h = header || "";
  const map = {};
  h.split(";").forEach((p) => {
    const [k, ...v] = p.trim().split("=");
    if (!k) return;
    map[k] = v.join("=");
  });
  return map;
}

function getPrivateKey() {
  return process.env.GITHUB_APP_PRIVATE_KEY; // multiline PEM pasted in env
  // If you stored it single-line with \n: return process.env.GITHUB_APP_PRIVATE_KEY.replace(/\\n/g, '\n');
}

async function handleAuthorize(event) {
  const base = appBaseUrl(event);
  const redirectUri = `${base}/callback`; // public path we redirected in netlify.toml

  const params = new URLSearchParams({
    client_id: process.env.AUTH0_CLIENT_ID,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: "openid profile email",
  });
  if (process.env.AUTH0_AUDIENCE)
    params.set("audience", process.env.AUTH0_AUDIENCE);
  // Optionally force Google:
  // params.set('connection', 'google-oauth2');

  const location = `https://${process.env.AUTH0_DOMAIN}/authorize?${params}`;
  return { statusCode: 302, headers: { Location: location } };
}

async function handleCallback(event) {
  const base = appBaseUrl(event);
  const redirectUri = `${base}/callback`;
  const code = (event.queryStringParameters || {}).code;
  if (!code) return { statusCode: 400, body: "Missing ?code" };

  const tokenRes = await fetch(
    `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        grant_type: "authorization_code",
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        code,
        redirect_uri: redirectUri,
      }),
    }
  );
  if (!tokenRes.ok) {
    const t = await tokenRes.text();
    return { statusCode: 502, body: `Auth0 token exchange failed: ${t}` };
  }
  const tokens = await tokenRes.json();

  let idPayload = {};
  try {
    const [, payload] = tokens.id_token.split(".");
    idPayload = JSON.parse(Buffer.from(payload, "base64").toString("utf8"));
  } catch {}

  const session = jwt.sign(
    { sub: idPayload.sub, email: idPayload.email, name: idPayload.name },
    process.env.SESSION_SECRET,
    { algorithm: "HS256", expiresIn: "8h" }
  );

  const cookie = [
    `decap_session=${session}`,
    "HttpOnly",
    "Secure",
    "SameSite=Lax",
    "Path=/",
  ].join("; ");

  return {
    statusCode: 302,
    headers: { "Set-Cookie": cookie, Location: `${base}/admin/` },
  };
}

async function handleToken(event) {
  const cookies = parseCookies(event.headers.cookie || event.headers.Cookie);
  const session = cookies["decap_session"];
  if (!session) return { statusCode: 401, body: "No session" };

  try {
    jwt.verify(session, process.env.SESSION_SECRET, { algorithms: ["HS256"] });
  } catch {
    return { statusCode: 401, body: "Invalid session" };
  }

  // GitHub App JWT
  const now = Math.floor(Date.now() / 1000);
  const appJwt = jwt.sign(
    { iat: now - 60, exp: now + 9 * 60, iss: process.env.GITHUB_APP_ID },
    getPrivateKey(),
    { algorithm: "RS256" }
  );

  // Exchange for installation access token
  const resp = await fetch(
    `https://api.github.com/app/installations/${process.env.GITHUB_INSTALLATION_ID}/access_tokens`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${appJwt}`,
        Accept: "application/vnd.github+json",
        "User-Agent": "decap-proxy",
      },
    }
  );
  if (!resp.ok) {
    const t = await resp.text();
    return { statusCode: 502, body: `GitHub token exchange failed: ${t}` };
  }
  const data = await resp.json(); // { token, expires_at, ... }

  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ token: data.token, provider: "github" }),
  };
}

// export const handler = async (event) => {
//   // event.path includes the full path—Netlify redirect will map /oauth, /callback, /token here
//   if (event.path.endsWith("/oauth")) return handleAuthorize(event);
//   if (event.path.endsWith("/callback")) return handleCallback(event);
//   if (event.path.endsWith("/token")) return handleToken(event);
//   return { statusCode: 404, body: "Not found" };
// };

export const handler = async (event) => {
  const url = new URL(event.rawUrl || `${appBaseUrl(event)}${event.path}`);
  const pathname = url.pathname;

  if (pathname.endsWith("/oauth")) return handleAuthorize(event);
  if (pathname.endsWith("/callback")) return handleCallback(event);
  if (pathname.endsWith("/token")) return handleToken(event);

  return { statusCode: 404, body: "Not found" };
};
