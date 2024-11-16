const closeMenuBtn = document.querySelector(".offcanvas-close-btn");
const openMenuBtn = document.querySelector(".open_menu_btn");
const closeBtn = document.querySelector(".offcanvas-close-btn");
const offCanvas = document.querySelector(".offcanvas__area");
const bodyOverlay = document.querySelector(".body-overlay");
const hasDropdown = document.querySelectorAll(".has-dropdown");
const navbar = document.getElementById("header-sticky");

/* 
========================
for Toggle mobile navbar 
=============================
 */
closeMenuBtn.addEventListener("click", () => {
  offCanvas.classList.toggle("offcanvas-opened");
  bodyOverlay.classList.toggle("opened");
});
openMenuBtn.addEventListener("click", () => {
  offCanvas.classList.toggle("offcanvas-opened");
  bodyOverlay.classList.toggle("opened");
});
/* 
========================
for expanded dropdown 
=============================
 */
hasDropdown.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("expanded");
  });
});

/* 
========================
for Sticky header
=============================
 */
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
