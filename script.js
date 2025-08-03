// script.js - JavaScript for DPS Prayagraj Website

// Responsive menu toggle
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("open");
}

// Image slider for hero section (if slides exist)
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  if (slides.length > 0) {
    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 4000);
  }
});

// Simple contact form validation
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert("Please fill in all fields before submitting.");
    }
  });
}
