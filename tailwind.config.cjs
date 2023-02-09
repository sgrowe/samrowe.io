/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.astro"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Permanent Marker", "cursive"],
      },
      colors: {
        sunsetOrange: "rgb(212,214,197)",
        // sunsetBlue: "rgb(137,185,230)",
        sunsetBlue: "rgb(137,184,232)",
      },
    },
  },
  plugins: [],
}
