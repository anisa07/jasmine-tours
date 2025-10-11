// netlify/functions/oauth-authorize.js (ESM)
// Redirect the user to Auth0 Universal Login

export const handler = async (event) => {
  const proto = event.headers["x-forwarded-proto"] || "https";
  const host = event.headers.host;
  const base = `${proto}://${host}`;

  // This MUST match your Auth0 Allowed Callback URL
  // (you said you're using the direct function URL pattern)
  const redirectUri = `${base}/.netlify/functions/oauth-callback`;

  const params = new URLSearchParams({
    client_id: process.env.AUTH0_CLIENT_ID,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: "openid profile email",
  });

  // If you later add an API in Auth0 and set AUTH0_AUDIENCE:
  if (process.env.AUTH0_AUDIENCE) {
    params.set("audience", process.env.AUTH0_AUDIENCE);
  }

  // Optionally force Google directly:
  // params.set("connection", "google-oauth2");

  const location = `https://${process.env.AUTH0_DOMAIN}/authorize?${params}`;

  return {
    statusCode: 302,
    headers: { Location: location },
  };
};
