const switcher = document.getElementById("styleSwitcher");

switcher.addEventListener("change", () => {
  const theme = switcher.value;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  switcher.value = savedTheme;
}