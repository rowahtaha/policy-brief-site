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
