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
// script. Loads Google's free Website Translator widget on demand (only
// when a visitor actually opens the panel) so the page translates in
// place, right here, with no extension or download — nothing beyond the
// standard widget script runs until someone asks for a translation.
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
  pop.setAttribute("aria-label", "Translate this page");
  pop.hidden = true;
  pop.innerHTML =
    '<button type="button" class="close-x" aria-label="Close">×</button>' +
    '<h4>Translate this page</h4>' +
    '<p>Pick a language and the page translates right here — nothing to install.</p>' +
    '<div id="google_translate_element"><span class="translate-loading">Loading languages…</span></div>';

  document.body.appendChild(fab);
  document.body.appendChild(pop);

  function closePop() {
    pop.hidden = true;
    fab.setAttribute("aria-expanded", "false");
  }

  var widgetRequested = false;
  function loadWidget() {
    if (widgetRequested) return;
    widgetRequested = true;
    window.googleTranslateElementInit = function () {
      new google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        "google_translate_element"
      );
      var loading = pop.querySelector(".translate-loading");
      if (loading) loading.remove();
    };
    var script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
  }

  fab.addEventListener("click", function () {
    var willOpen = pop.hidden;
    pop.hidden = !willOpen;
    fab.setAttribute("aria-expanded", String(willOpen));
    if (willOpen) loadWidget();
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
