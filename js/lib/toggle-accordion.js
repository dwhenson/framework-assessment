function toggleAccordion(panelToActivate) {
  const activeButton = panelToActivate.querySelector("button");
  const activePanel = panelToActivate.querySelector(".accordion-content");
  const activePanelIsOpened = activeButton.getAttribute("aria-expanded");

  if (activePanelIsOpened === "true") {
    activeButton.setAttribute("aria-expanded", false);
    activePanel.setAttribute("aria-hidden", true);
  } else {
    activeButton.setAttribute("aria-expanded", true);
    activePanel.setAttribute("aria-hidden", false);
  }
}

export default toggleAccordion;
