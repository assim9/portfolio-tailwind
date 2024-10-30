const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
  console.log("Hamburger clicked!");
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
});
const sunImg = document.getElementById("sun");
const moonImg = document.getElementById("moon");

// Theme Variables
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Image Toggling
const imgToggle = () => {
  if (document.documentElement.classList.contains("dark")) {
    sunImg.classList.remove("hidden");
    moonImg.classList.add("hidden");
  } else {
    sunImg.classList.add("hidden");
    moonImg.classList.remove("hidden");
  }
};

// Theme Check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
  }
  imgToggle();
};

// Manual Theme Switch
const themeSwitch = () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  imgToggle();
};

// Call theme switch on clicking buttons
sunImg.addEventListener("click", () => {
  themeSwitch();
});
moonImg.addEventListener("click", () => {
  themeSwitch();
});

// Initial theme check
themeCheck();
