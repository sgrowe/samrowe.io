/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        img: 'url(var(--img))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
