/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{astro,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      fontSize: {
        "sm+": "0.9375rem", // 15px
      },
      fontFamily: {
        display: ["Permanent Marker", "cursive"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        sunsetOrange: "rgb(212,214,197)",
        sunsetBlue: "rgb(137,184,232)",
      },
    },
  },
  plugins: [],
}
