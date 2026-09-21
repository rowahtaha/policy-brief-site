// Makes the sidebar nav open/closable via the masthead's .nav-toggle button.
// State (open vs collapsed) is remembered per-visitor across pages via localStorage.
(function () {
  var KEY = "ddNavOpen";
  var btn = document.querySelector(".nav-toggle");
  var layout = document.querySelector(".layout");
  if (!btn || !layout) return;

  function apply(open) {
    layout.classList.toggle("nav-collapsed", !open);
    btn.setAttribute("aria-expanded", String(open));
  }

  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  apply(stored === null ? true : stored === "1");

  btn.addEventListener("click", function () {
    var next = layout.classList.contains("nav-collapsed");
    apply(next);
    try { localStorage.setItem(KEY, next ? "1" : "0"); } catch (e) {}
  });
})();

// Floating "Translate" button, present on every page that loads this
// script. Points visitors to their browser's own built-in translation
// instead of embedding a third-party translate widget that would send
// page content to a company they didn't choose — see the CSS comment
// above .translate-fab for why.
(function () {
  var fab = document.createElement("button");
  fab.type = "button";
  fab.className = "translate-fab";
  fab.setAttribute("aria-expanded", "false");
  fab.setAttribute("aria-controls", "translatePop");
  fab.innerHTML = '<span class="globe-icon" aria-hidden="true">🌐</span>Translate';

  var pop = document.createElement("div");
  pop.className = "translate-pop";
  pop.id = "translatePop";
  pop.setAttribute("role", "dialog");
  pop.setAttribute("aria-label", "How to translate this page");
  pop.hidden = true;
  pop.innerHTML =
    '<button type="button" class="close-x" aria-label="Close">×</button>' +
    '<h4>Read this in another language</h4>' +
    '<p>This site uses your browser’s own built-in translation rather than a third-party translate widget — nothing on this page gets sent anywhere else to make that work.</p>' +
    '<p><strong>Chrome or Edge:</strong> click the translate icon in the address bar, or right-click the page and choose “Translate to…”</p>' +
    '<p><strong>Safari:</strong> click the “Aa” icon in the address bar, then “Translate to…”</p>' +
    '<p><strong>Firefox:</strong> needs a translation extension — it doesn’t ship one built in.</p>';

  document.body.appendChild(fab);
  document.body.appendChild(pop);

  function closePop() {
    pop.hidden = true;
    fab.setAttribute("aria-expanded", "false");
  }

  fab.addEventListener("click", function () {
    var willOpen = pop.hidden;
    pop.hidden = !willOpen;
    fab.setAttribute("aria-expanded", String(willOpen));
  });

  pop.querySelector(".close-x").addEventListener("click", closePop);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closePop();
  });

  document.addEventListener("click", function (e) {
    if (pop.hidden) return;
    if (pop.contains(e.target) || fab.contains(e.target)) return;
    closePop();
  });
})();
