document.addEventListener("DOMContentLoaded", initialize);

const hamburgerIcon = document.getElementById("hamburger");
const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");

const body = document.getElementById("body");

const sun = document.getElementById("sun");
const sunMenu = document.getElementById("sunMenu");
const moon = document.getElementById("moon");
const moonMenu = document.getElementById("moonMenu");

hamburgerIcon.addEventListener("click", summonBurgerMenu);
menuIcon.addEventListener("click", closeMenu);

sun.addEventListener("click", toggleLightMode);
moon.addEventListener("click", toggleDarkMode);
sunMenu.addEventListener("click", toggleLightModeMenu);
moonMenu.addEventListener("click", toggleDarkModeMenu);

function summonBurgerMenu() {
  sidebar.style.display = "block";
}

function closeMenu() {
  sidebar.style.display = "none";
}

function initialize() {
  if (localStorage.getItem("theme") === "") {
    localStorage.setItem("dark");

    body.classList.remove("light");
    body.classList.add("dark");

    sun.style.display = "block";
    sunMenu.style.display = "block";
    moon.style.display = "none";
    moonMenu.style.display = "none";
  }

  if (localStorage.getItem("theme") === "light") {
    body.classList.remove("dark");
    body.classList.add("light");

    sun.style.display = "none";
    sunMenu.style.display = "none";
    moon.style.display = "block";
    moonMenu.style.display = "block";
  }

  if (localStorage.getItem("theme") === "dark") {
    body.classList.remove("light");
    body.classList.add("dark");

    sun.style.display = "block";
    sunMenu.style.display = "block";
    moon.style.display = "none";
    moonMenu.style.display = "none";
  }
}

if (body.className === "light") {
  sun.style.display = "none";
}

if (body.className === "dark") {
  moon.style.display = "none";
}

function toggleLightMode() {
  localStorage.setItem("theme", "light");

  body.classList.remove("dark");
  body.classList.add("light");

  sun.style.display = "none";
  moon.style.display = "block";
}

function toggleLightModeMenu() {
  localStorage.setItem("theme", "light");

  body.classList.remove("dark");
  body.classList.add("light");

  sunMenu.style.display = "none";
  sun.style.display = "none";
  moonMenu.style.display = "block";
  moon.style.display = "block";
}

function toggleDarkModeMenu() {
  localStorage.setItem("theme", "dark");

  body.classList.remove("light");
  body.classList.add("dark");

  sunMenu.style.display = "block";
  sun.style.display = "block";
  moonMenu.style.display = "none";
  moon.style.display = "none";
}

function toggleDarkMode() {
  localStorage.setItem("theme", "dark");

  body.classList.remove("light");
  body.classList.add("dark");

  sun.style.display = "block";
  moon.style.display = "none";
}
