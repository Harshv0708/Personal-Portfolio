// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Apply stored theme on load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  themeIcon.src = "./assets/icons/sun-white.png";
}

// Toggle Theme
themeToggle.addEventListener("click", () => {
  const darkMode = document.body.classList.toggle("dark-theme");

  if (darkMode) {
    themeIcon.src = "./assets/icons/sun-white.png";
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.src = "./assets/icons/moon-black.png";
    localStorage.setItem("theme", "light");
  }
});