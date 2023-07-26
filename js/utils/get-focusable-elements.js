/**
 * Returns back a NodeList of focusable elements
 * that exist within the passed parent HTMLElement
 */
function getFocusableElements(parent) {
  if (!parent) {
    console.warn("You need to pass a parent HTMLElement");
    return [];
  }

  return parent.querySelectorAll(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)'
  );
}

export default getFocusableElements;
