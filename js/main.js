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

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");
if (navLink) {
  navLink.forEach((n) => n.addEventListener("click", hideMenu));
}

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const themeIcon = document.getElementById("change-theme");

const darkMode = "dark_mode";
const lightMode = "light_mode";

// We obtain the current theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkMode) ? darkMode : lightMode;

// Previously selected theme
const selectedTheme = localStorage.getItem("selected-theme");
if (selectedTheme) {
  document.body.classList[selectedTheme === darkMode ? "add" : "remove"](
    darkMode
  );
  themeIcon.innerHTML = selectedTheme === darkMode ? lightMode : darkMode;
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / light theme
  document.body.classList.toggle(darkMode);
  themeIcon.innerHTML = getCurrentTheme() == darkMode ? lightMode : darkMode;
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
});

/*==================== DETAILS SHOW / HIDE ====================*/
const details = document.getElementById("details"),
  contact__items = document.querySelectorAll(".contact__item"),
  detailsClose = document.getElementById("nav-before-btn");

/*===== DETAILS SHOW =====*/
if (contact__items) {
  contact__items.forEach((n) =>
    n.addEventListener("click", () => {
      details.classList.toggle("show");
      hideMenu();
    })
  );
}
/*===== DETAILS HIDE =====*/
if (detailsClose) {
  detailsClose.addEventListener("click", () => {
    details.classList.remove("show");
  });
}

/*==================== ADD DETAILS SHOW / HIDE ====================*/
const addDetails = document.getElementById("add__details"),
  addDetailsBtn = document.getElementById("add__details_btn"),
  addBackBtn = document.getElementById("add-back-btn"),
  addCancelBtn = document.getElementById("add-cancel-btn");

/*===== ADD DETAILS SHOW =====*/
if (addDetailsBtn) {
  addDetailsBtn.addEventListener("click", () => {
    addDetails.classList.add("show");
    editDetails.classList.remove("show");
    hideMenu();
  });
}
/*===== ADD DETAILS HIDE =====*/
if (addBackBtn) {
  addBackBtn.addEventListener("click", () => {
    addDetails.classList.remove("show");
  });
}
if (addCancelBtn) {
  addCancelBtn.addEventListener("click", () => {
    addDetails.classList.remove("show");
  });
}

/*==================== EDIT DETAILS SHOW / HIDE ====================*/
const editDetails = document.getElementById("edit__details"),
  editDetailsBtn = document.getElementById("nav-edit-btn"),
  editBackBtn = document.getElementById("edit-back-btn"),
  editCancelBtn = document.getElementById("edit-cancel-btn");

/*===== EDIT DETAILS SHOW =====*/
if (editDetailsBtn) {
  editDetailsBtn.addEventListener("click", () => {
    editDetails.classList.add("show");
    addDetails.classList.remove("show");
    hideMenu();
  });
}
/*===== EDIT DETAILS HIDE =====*/
if (editBackBtn) {
  editBackBtn.addEventListener("click", () => {
    editDetails.classList.remove("show");
  });
}
if (editCancelBtn) {
  editCancelBtn.addEventListener("click", () => {
    editDetails.classList.remove("show");
  });
}
