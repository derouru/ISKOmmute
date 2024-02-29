// - - - - - Splash Screen - - - - - //
var firstOpen = 0;

document.addEventListener('DOMContentLoaded', function() {
    const splashContent = document.querySelector('.splash-screen');

    splashContent.addEventListener('click', function() {
        splashContent.classList.add('slide-left');
        firstOpen = 1;
    });
});

// - - - - - Sidebar Menu - - - - - //
const nav = document.querySelector(".nav"),
sidebarOpenBtn = document.querySelector(".sidebarOpenBtn"),
sidebarCloseBtn = document.querySelector(".sidebarCloseBtn"),
navShadow = document.querySelector(".nav-shadow");

sidebarOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav"),
  navShadow.classList.add("open");
});

sidebarCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
  navShadow.classList.remove("open");
});