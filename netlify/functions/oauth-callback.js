// Exchanges Auth0 "code" -> tokens, then sets a signed session cookie and redirects to /admin/

import * as jwt from "jsonwebtoken";

const appBaseUrl = (event) => {
  const proto = event.headers["x-forwarded-proto"] || "https";
  const host = event.headers.host;
  return `${proto}://${host}`;
};

const handler = async (event) => {
  const base = appBaseUrl(event);
  const redirectUri = `${base}/.netlify/functions/oauth-callback`;

  const code = (event.queryStringParameters || {}).code;
  if (!code) {
    return { statusCode: 400, body: "Missing ?code" };
  }

  // Exchange code for tokens at Auth0
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
    const errText = await tokenRes.text();
    return { statusCode: 502, body: `Auth0 token exchange failed: ${errText}` };
  }

  const tokens = await tokenRes.json();
  // tokens contains: access_token, id_token, token_type, expires_in, (maybe) scope

  // Decode the ID token just to pull basic profile (we're not verifying here;
  // we rely on Authorization Code flow + server-side secret).
  const idPayload = (() => {
    try {
      const parts = tokens.id_token.split(".");
      return JSON.parse(Buffer.from(parts[1], "base64").toString("utf8"));
    } catch {
      return {};
    }
  })();

  // Create a short session (e.g., 8 hours). You can extend if needed.
  const session = jwt.sign(
    {
      sub: idPayload.sub,
      email: idPayload.email,
      name: idPayload.name,
      // optionally: roles, etc.
    },
    process.env.SESSION_SECRET,
    { algorithm: "HS256", expiresIn: "8h" }
  );

  // Set HttpOnly Secure cookie
  const cookie = [
    `decap_session=${session}`,
    "HttpOnly",
    "Secure",
    "SameSite=Lax",
    "Path=/",
    // optionally set a Max-Age=28800 (8h)
  ].join("; ");

  return {
    statusCode: 302,
    headers: {
      "Set-Cookie": cookie,
      Location: `${base}/admin/`,
    },
  };
};

export { handler };
