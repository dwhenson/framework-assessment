import burgerMenu from "./lib/burger-menu";
import toggleAccordion from "./lib/toggle-accordion";

/* =================== Variables ====================== */
/* ==================================================== */
const accordion = document.querySelector("#accordion");

/* ============  Inits and Event Listeners  =========== */
/* ==================================================== */

// Hide accordion content on page load
const accordionPanels = [...document.querySelectorAll(".accordion-panel")];
for (const panel of accordionPanels) {
  panel.querySelector("button").setAttribute("aria-expanded", false);
  panel.querySelector(".accordion-content").setAttribute("aria-hidden", true);
}

// Show content on request
accordion.addEventListener("click", (event) => {
  const activePanel = event.target.closest(".accordion-panel");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

// Close burger-menu with escape
window.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const menuIsOpen = document.querySelector(
    ".burger-menu[enabled='true'][status='open']"
  );
  if (menuIsOpen) {
    menuIsOpen.setAttribute("status", "closed");
  }
});
