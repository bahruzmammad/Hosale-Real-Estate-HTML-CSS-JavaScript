const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuButton.querySelector("i");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".hero-content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".search-form", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".service-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".experience-content .section-title", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".experience-content p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".experience-button", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".experience-stats", {
  ...scrollRevealOption,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
});

ScrollReveal().reveal(".subscribe .section-title", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".subscribe form", {
  ...scrollRevealOption,
  delay: 500,
});
