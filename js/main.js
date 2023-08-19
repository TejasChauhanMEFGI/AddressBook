/*==================== MENU SHOW / HIDE ====================*/
const navbar = document.getElementById("navbar"),
  navbarBg = document.getElementById("navbar_bg_mobile"),
  navToggle = document.getElementById("nav-toggle-btn"),
  navClose = document.getElementById("nav-close-btn");

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
    navbarBg.classList.toggle("show");
  });
}

/*===== MENU HIDE =====*/
const hideMenu = () => {
  navbar.classList.remove("show-menu");
  navbarBg.classList.remove("show");
};
if (navClose) {
  navClose.addEventListener("click", hideMenu);
}
