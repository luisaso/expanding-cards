const panels = document.querySelectorAll(".panel");

const removeActiveClasses = () => {
  panels.forEach(panel => panel.classList.remove("active"))
};

const activatePanel = (panel) => {
  removeActiveClasses();
  panel.classList.add("active");
};

panels.forEach((panel) => {
  panel.addEventListener("mouseover", () => activatePanel(panel));
});