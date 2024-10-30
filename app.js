const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
  console.log("Hamburger clicked!");
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
});
// Get the dark mode toggle image and the <html> element
const toggle = document.getElementById("darkModeToggle");
const htmlElement = document.documentElement; // Refers to the <html> element

// Add a click event listener to the image
toggle.addEventListener("click", function () {
  // Toggle the 'dark' class on the <html> element
  htmlElement.classList.toggle("dark");

  // // Optional: You can log messages for debugging
  // if (htmlElement.classList.contains("dark")) {
  //   console.log("Dark mode activated!");
  // } else {
  //   console.log("Light mode activated!");
  // }
});
