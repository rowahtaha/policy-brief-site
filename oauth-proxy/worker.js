// Custom GitHub OAuth proxy for Decap CMS, replacing Netlify's built-in
// OAuth login UI. Netlify's flow only works when the CMS is hosted ON a
// Netlify site; this site is on GitHub Pages, so the postMessage handshake
// back to the opener silently fails (wrong origin, popup never closes).
// This worker implements the same handshake decap-cms expects, but redirects
// straight to GitHub and posts the token back to https://rowataha.com itself.
//
// Deploy with: wrangler deploy
// Required secrets (set with `wrangler secret put NAME`):
//   GITHUB_CLIENT_ID
//   GITHUB_CLIENT_SECRET

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/auth") {
      return handleAuth(url, env);
    }
    if (url.pathname === "/callback") {
      return handleCallback(url, request, env);
    }
    return new Response("Not found", { status: 404 });
  },
};

async function handleAuth(url, env) {
  const state = crypto.randomUUID();
  const redirectUri = `${url.origin}/callback`;

  const authUrl = new URL("https://github.com/login/oauth/authorize");
  authUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("scope", "repo,user");
  authUrl.searchParams.set("state", state);

  const headers = new Headers({ Location: authUrl.toString() });
  headers.append(
    "Set-Cookie",
    `oauth_state=${state}; Max-Age=600; Path=/; HttpOnly; Secure; SameSite=Lax`
  );
  return new Response(null, { status: 302, headers });
}

async function handleCallback(url, request, env) {
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookieHeader = request.headers.get("Cookie") || "";
  const cookieMatch = cookieHeader.match(/oauth_state=([^;]+)/);
  const cookieState = cookieMatch ? cookieMatch[1] : null;

  if (!code || !state || !cookieState || state !== cookieState) {
    return renderResult(false, "State mismatch or missing authorization code.");
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/callback`,
    }),
  });
  const tokenData = await tokenRes.json();

  if (tokenData.error || !tokenData.access_token) {
    return renderResult(false, tokenData.error_description || "Token exchange failed.");
  }

  return renderResult(true, null, tokenData.access_token);
}

// Implements decap-cms's expected postMessage handshake:
// 1. Popup announces itself: opener.postMessage("authorizing:github", "*")
// 2. Decap-cms's AuthenticationPage echoes that same string back to the popup
// 3. Only on receiving that echo does the popup send the real token payload,
//    targeted at the echo's origin (so it never fires at the wrong origin).
function renderResult(success, errorMessage, token) {
  const payload = success
    ? { token, provider: "github" }
    : { error: errorMessage || "OAuth failed" };
  const messageType = success ? "success" : "error";
  const payloadJson = JSON.stringify(payload).replace(/\\/g, "\\\\").replace(/'/g, "\\'");

  const html = `<!DOCTYPE html>
<html>
<body>
<script>
(function () {
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:${messageType}:${payloadJson}',
      e.origin
    );
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
<p>${success ? "Authorized — you can close this window." : "Authorization failed: " + (errorMessage || "")}</p>
</body>
</html>`;

  return new Response(html, {
    status: success ? 200 : 400,
    headers: { "Content-Type": "text/html" },
  });
}
