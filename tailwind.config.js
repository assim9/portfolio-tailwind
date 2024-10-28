module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      spacing: {
        big: "48rem",
      },
    },
    fontFamily: {
      nunito: ['"Nunito"', "sans-serif"],
    },
  },
  plugins: [],
};
