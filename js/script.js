const closeMenuBtn = document.querySelector(".offcanvas-close-btn");
const openMenuBtn = document.querySelector(".open_menu_btn");
const closeBtn = document.querySelector(".offcanvas-close-btn");
const offCanvas = document.querySelector(".offcanvas__area");
const bodyOverlay = document.querySelector(".body-overlay");

closeMenuBtn.addEventListener("click", () => {
  offCanvas.classList.toggle("offcanvas-opened");
  bodyOverlay.classList.toggle("opened");
});
openMenuBtn.addEventListener("click", () => {
  offCanvas.classList.toggle("offcanvas-opened");
  bodyOverlay.classList.toggle("opened");
});
