// Redirects the user to Auth0 Universal Login (optionally force Google)

const appBaseUrl = (event) => {
  const proto = event.headers["x-forwarded-proto"] || "https";
  const host = event.headers.host;
  return `${proto}://${host}`;
};

const handler = async (event) => {
  const base = appBaseUrl(event);
  const redirectUri = `${base}/.netlify/functions/oauth-callback`;

  const params = new URLSearchParams({
    client_id: process.env.AUTH0_CLIENT_ID,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: "openid profile email",
  });

  if (process.env.AUTH0_AUDIENCE) {
    params.set("audience", process.env.AUTH0_AUDIENCE);
  }

  // Optional: force Google directly
  // params.set('connection', 'google-oauth2');

  const location = `https://${process.env.AUTH0_DOMAIN}/authorize?${params}`;
  return {
    statusCode: 302,
    headers: { Location: location },
  };
};

export { handler };
