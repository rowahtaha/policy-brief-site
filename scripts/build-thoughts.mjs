// Regenerates thoughts.html (the index) and thoughts/<slug>.html (one static page per
// post) from the markdown source files in thoughts/. Rowa publishes new posts entirely
// through the Decap CMS admin (which just commits a .md file here) — this script is what
// turns that commit into real, crawlable HTML, since GitHub Pages serves this repo as-is
// with no build step of its own. Run automatically by .github/workflows/build-thoughts.yml
// on every push that touches thoughts/*.md; run locally with `npm run build:thoughts`.
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import yaml from "js-yaml";
import { marked } from "marked";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const THOUGHTS_DIR = join(ROOT, "thoughts");
const SITE_URL = "https://rowataha.com";

function parsePost(text) {
  const m = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!m) return { meta: {}, body: text };
  let meta = {};
  try { meta = yaml.load(m[1]) || {}; } catch { meta = {}; }
  return { meta, body: m[2] };
}

function fmtDate(d) {
  if (!d) return "";
  const dt = d instanceof Date ? d : new Date(d + "T00:00:00Z");
  if (isNaN(dt)) return String(d);
  return dt.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

function readTime(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function excerptOf(meta, body) {
  return meta.excerpt || body.replace(/[#*_>[\]!`]/g, "").trim().slice(0, 180) + "…";
}

function loadPosts() {
  const files = readdirSync(THOUGHTS_DIR).filter(f => f.endsWith(".md"));
  const posts = files.map(f => {
    const text = readFileSync(join(THOUGHTS_DIR, f), "utf8");
    const { meta, body } = parsePost(text);
    return { slug: f.replace(/\.md$/, ""), meta, body };
  });
  const toTime = d => d ? (d instanceof Date ? d : new Date(d)).getTime() : 0;
  posts.sort((a, b) => toTime(b.meta.date) - toTime(a.meta.date));
  return posts;
}

const NAV = (activeHref, prefix = "") => `
<div class="layout">
  <aside class="sidebar">
    <nav>
      <a href="${prefix}globe-rights.html"${activeHref === "globe-rights.html" ? ' class="active"' : ""}>Digital Rights Projects</a>
      <a href="${prefix}newsletter.html"${activeHref === "newsletter.html" ? ' class="active"' : ""}>Newsletter</a>
      <a href="${prefix}subscribe.html"${activeHref === "subscribe.html" ? ' class="active"' : ""}>Subscribe</a>
      <a href="${prefix}thoughts.html"${activeHref === "thoughts.html" ? ' class="active"' : ""}>Rowa's Thoughts</a>
      <a href="${prefix}jobs.html"${activeHref === "jobs.html" ? ' class="active"' : ""}>Job Board</a>
      <a href="${prefix}about.html"${activeHref === "about.html" ? ' class="active"' : ""}>About</a>
    </nav>
  </aside>`;

function pageShell({ title, description, ogUrl, ogImage, ogType = "website", prefix = "", head = "", body }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<meta property="og:type" content="${ogType}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${ogUrl}">
<meta property="og:image" content="${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(description)}">
<meta name="twitter:image" content="${ogImage}">
<link rel="stylesheet" href="${prefix}assets/style.css">
${head}</head>
<body>

<header class="masthead">
  <div class="wrap">
    <a href="${prefix}home.html" class="masthead-brand">
      <img src="${prefix}assets/logo.png" alt="The Digital Divide logo" class="masthead-logo">
      <h1>The Digital Divide</h1>
    </a>
  </div>
</header>
${body}
<footer>
  <div class="wrap">
    © 2026 Rowa Taha. All rights reserved.<br>
    Also posted on <a href="https://substack.com/@rowataha" target="_blank" rel="noopener">Substack</a> and <a href="https://www.linkedin.com/in/rowa-taha/" target="_blank" rel="noopener">LinkedIn</a>
  </div>
</footer>

</body>
</html>
`;
}

function renderIndex(posts) {
  const description = "Longer, more personal essays on tech policy, privacy, and digital rights, by Rowa Taha.";
  let listHtml;
  if (posts.length === 0) {
    listHtml = `<p style="color:var(--muted)">No posts yet — check back soon.</p>`;
  } else {
    listHtml = `<div class="thought-list">` + posts.map((p, i) => {
      const excerpt = excerptOf(p.meta, p.body);
      const mins = readTime(p.body);
      return `<a class="thought-card${i === 0 ? " featured" : ""}" href="thoughts/${p.slug}.html">
        ${p.meta.cover ? `<img class="cover" src="${escapeHtml(p.meta.cover)}" alt="">` : ""}
        <div class="thought-body">
          <div class="thought-eyebrow">Rowa's Thoughts</div>
          <h3>${escapeHtml(p.meta.title || p.slug)}</h3>
          <p class="excerpt">${escapeHtml(excerpt)}</p>
          <div class="thought-meta">${fmtDate(p.meta.date)} · ${mins} min read</div>
        </div>
      </a>`;
    }).join("\n") + `</div>`;
  }

  const body = `
${NAV("thoughts.html")}
  <main class="content" id="main-content">
    <h2>Rowa's Thoughts</h2>
    <p style="color:var(--muted)">Longer, more personal takes on tech policy, privacy, and digital rights.</p>
    <hr class="rule">
    ${listHtml}
  </main>
</div>
<script>
  // Preserves any already-shared "thoughts.html?post=<slug>" link from before this page
  // became static — the real content above is already in the initial HTML either way.
  (function () {
    const slug = new URLSearchParams(location.search).get("post");
    if (slug) location.replace("thoughts/" + slug + ".html");
  })();
</script>`;

  return pageShell({
    title: "Rowa's Thoughts — The Digital Divide",
    description,
    ogUrl: `${SITE_URL}/thoughts.html`,
    ogImage: `${SITE_URL}/assets/logo.png`,
    body,
  });
}

function renderPost(post) {
  const { meta, body, slug } = post;
  const bodyHtml = marked.parse(body);
  const citations = (meta.citations || []).filter(c => c && c.text);
  const mins = readTime(body);
  const description = excerptOf(meta, body);
  const ogImage = meta.cover ? `${SITE_URL}/${meta.cover.replace(/^\//, "")}` : `${SITE_URL}/assets/logo.png`;

  const pageBody = `
${NAV("thoughts.html", "../")}
  <main class="content" id="main-content">
    <p><a href="../thoughts.html">← Rowa's Thoughts</a></p>
    <article class="thought-article">
      <div class="thought-article-header">
        <div class="kicker">Rowa's Thoughts</div>
        <h2>${escapeHtml(meta.title || "")}</h2>
      </div>
      <div class="thought-byline">
        <img class="avatar" src="../assets/logo.png" alt="Rowa Taha">
        <div class="byline-text"><strong>Rowa Taha</strong> · ${fmtDate(meta.date)} · ${mins} min read</div>
      </div>
      ${meta.cover ? `<img class="cover-full" src="../${escapeHtml(meta.cover)}" alt="">` : ""}
      <div class="post-body">${bodyHtml}</div>
      ${citations.length ? `<hr class="rule"><h3 style="font-size:1rem;">Sources</h3>
        <ol class="sources-list">${citations.map(c => `<li>${c.url ? `<a href="${escapeHtml(c.url)}" target="_blank" rel="noopener">${escapeHtml(c.text)}</a>` : escapeHtml(c.text)}</li>`).join("")}</ol>` : ""}
      <div class="thought-article-footer">Enjoyed this? <a href="../subscribe.html">Subscribe to The Rowa Report</a> for the weekly roundup, or <a href="../thoughts.html">read more Thoughts →</a></div>
    </article>
  </main>
</div>`;

  return pageShell({
    title: `${meta.title || slug} — Rowa's Thoughts — The Digital Divide`,
    description,
    ogUrl: `${SITE_URL}/thoughts/${slug}.html`,
    ogImage,
    ogType: "article",
    prefix: "../",
    body: pageBody,
  });
}

function main() {
  mkdirSync(THOUGHTS_DIR, { recursive: true });
  const posts = loadPosts();
  writeFileSync(join(ROOT, "thoughts.html"), renderIndex(posts));
  posts.forEach(p => {
    writeFileSync(join(THOUGHTS_DIR, `${p.slug}.html`), renderPost(p));
  });
  console.log(`Built thoughts.html + ${posts.length} post page(s): ${posts.map(p => p.slug).join(", ")}`);
}

main();
