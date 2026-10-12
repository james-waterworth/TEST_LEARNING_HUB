/**
 * MAST PAGE — static content with ScribeHow embed, no data loading required.
 */
function initMASTPage() {
  injectHeader("mast");
  injectFooter();
  applySavedPreferences();
  initMastStaticZoom();
}

/**
 * Apply static zoom to MAST guide images based on data attributes:
 *   data-zoom-scale  — zoom factor (1 = no zoom, 2 = 2×, 3 = 3× …)
 *   data-zoom-x      — horizontal focus point as percentage (0 = left, 100 = right)
 *   data-zoom-y      — vertical focus point as percentage   (0 = top,  100 = bottom)
 *
 * The image is scaled with CSS transform and clipped by an overflow:hidden
 * container so only the focused area is visible.
 */
function initMastStaticZoom() {
  document.querySelectorAll(".mast-zoom-img").forEach(function (img) {
    var scale = parseFloat(img.getAttribute("data-zoom-scale")) || 1;
    var x = parseFloat(img.getAttribute("data-zoom-x"));
    var y = parseFloat(img.getAttribute("data-zoom-y"));

    if (scale > 1) {
      img.style.transform = "scale(" + scale + ")";
      if (!isNaN(x) && !isNaN(y)) {
        img.style.transformOrigin = x + "% " + y + "%";
      }
    }
  });
}