// netlify/functions/oauth-token.js (ESM)
import * as jwt from "jsonwebtoken";

function getPrivateKey() {
  // If you pasted multiline PEM in Netlify env, return as-is:
  return process.env.GITHUB_APP_PRIVATE_KEY;
  // If stored single-line with \n, use:
  // return process.env.GITHUB_APP_PRIVATE_KEY.replace(/\\n/g, "\n");
}

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

export const handler = async (event) => {
  // 1) Verify session cookie set by oauth-callback
  const cookies = parseCookies(event.headers.cookie || event.headers.Cookie);
  const session = cookies["decap_session"];
  if (!session) return { statusCode: 401, body: "No session" };

  try {
    jwt.verify(session, process.env.SESSION_SECRET, { algorithms: ["HS256"] });
  } catch {
    return { statusCode: 401, body: "Invalid session" };
  }

  // 2) Create GitHub App JWT (short-lived)
  const now = Math.floor(Date.now() / 1000);
  const appJwt = jwt.sign(
    { iat: now - 60, exp: now + 9 * 60, iss: process.env.GITHUB_APP_ID },
    getPrivateKey(),
    { algorithm: "RS256" }
  );

  // 3) Exchange for installation token
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

  // 4) Return what Decap expects
  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ token: data.token, provider: "github" }),
  };
};
