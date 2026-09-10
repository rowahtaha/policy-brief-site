# Custom OAuth proxy for Rowa's Thoughts (Decap CMS)

Replaces Netlify's built-in `/admin/` login, which doesn't work here because
the CMS is hosted on GitHub Pages, not on Netlify — the login popup opens,
GitHub authorization succeeds, but Netlify's callback can't `postMessage`
the token back to the right origin, so the popup never closes and the main
tab spins forever.

This worker does the same job ourselves, targeting `rowataha.com` directly.
It's a Cloudflare Worker: free, no server to maintain, deploys in minutes.

## One-time setup (needs your GitHub + Cloudflare accounts — I can't do these steps, they need your login)

### 1. Create a GitHub OAuth App
Go to https://github.com/settings/developers → "New OAuth App", fill in:
- **Application name:** Rowa's Thoughts CMS
- **Homepage URL:** `https://rowataha.com`
- **Authorization callback URL:** `https://rowa-cms-oauth.<your-subdomain>.workers.dev/callback`
  (you'll get the exact subdomain after step 3's first deploy — you can edit
  this field again afterward, GitHub lets you update it anytime)

Click "Register application", then "Generate a new client secret". Copy both
the **Client ID** and **Client Secret** somewhere safe — you'll paste them
into Cloudflare in step 4, not here.

### 2. Install Wrangler (Cloudflare's CLI) and log in
From this `oauth-proxy` folder:
```
npm install -g wrangler
wrangler login
```
This opens a browser tab for you to log into (or create) a free Cloudflare
account and approve Wrangler. I can run the `wrangler login` command for you,
but you'll need to complete the login/approval in the browser yourself.

### 3. First deploy (to get your worker's URL)
```
wrangler deploy
```
This prints your worker's URL, e.g. `https://rowa-cms-oauth.rowa.workers.dev`.
Go back to step 1's GitHub OAuth App and make sure the callback URL matches
`<that-url>/callback` exactly.

### 4. Set the two secrets
```
wrangler secret put GITHUB_CLIENT_ID
wrangler secret put GITHUB_CLIENT_SECRET
```
Paste the values from step 1 when prompted (these go straight to Cloudflare,
never into this repo).

### 5. Point the CMS at the new worker
In `admin/config.yml`, change:
```yaml
backend:
  name: github
  repo: rowahtaha/policy-brief-site
  branch: main
  base_url: https://rowa-cms-oauth.<your-subdomain>.workers.dev
```
(remove the old `auth_endpoint: auth` and `site_domain: ...` lines — those
were Netlify-specific).

### 6. Test
Visit `https://rowataha.com/admin/`, click "Login with GitHub" — it should
redirect to GitHub, ask you to authorize, then bounce straight back into the
CMS editor with no stuck spinner.
