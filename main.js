// JavaScript for toggling the hamburger menu
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");
const barsIcon = document.querySelector(".uil-bars");
const crossIcon = document.querySelector(".cross-icon");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  barsIcon.style.display = barsIcon.style.display === "none" ? "block" : "none";
  crossIcon.style.display = crossIcon.style.display === "none" ? "block" : "none";
});
