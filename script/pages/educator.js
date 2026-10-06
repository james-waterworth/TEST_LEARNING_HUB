/**
 * EDUCATOR PAGE — static content, no data loading required.
 */
function initEducatorPage() {
  injectHeader("educator");
  injectFooter();
  applySavedPreferences();
  initExampleCards();
}

/**
 * Wire up the two example-entry cards so that pressing the plus button on
 * either card expands (or collapses) both example bodies together, keeping
 * the icons and aria-expanded attributes in sync.
 */
function initExampleCards() {
  const toggles = document.querySelectorAll(".lhd-example-toggle");
  const bodies = document.querySelectorAll(".lhd-example-body");
  const icons = document.querySelectorAll(".lhd-example-toggle .lhd-toggle-icon");
  if (!toggles.length || !bodies.length) return;

  const setExpanded = (expanded) => {
    toggles.forEach((t) => t.setAttribute("aria-expanded", expanded ? "true" : "false"));
    bodies.forEach((b) => b.classList.toggle("show", expanded));
    icons.forEach((icon) => {
      icon.classList.toggle("bi-plus-circle", !expanded);
      icon.classList.toggle("bi-dash-circle", expanded);
    });
  };

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const currentlyShown = bodies[0].classList.contains("show");
      setExpanded(!currentlyShown);
    });
  });
}