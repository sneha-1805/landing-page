// 🌙 Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }
});


// 📱 Mobile Hamburger Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// 🎬 Scroll Animation
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;

    if (position < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});