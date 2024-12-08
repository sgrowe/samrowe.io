/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.html', './content/**/*.md'],
  theme: {
    extend: {
      fontSize: {
        'sm+': '0.9375rem', // 15px
      },
      fontFamily: {
        merriweather: ['Merriweather', 'Georgia', 'serif'],
      },
      backgroundImage: {
        img: 'url(var(--img))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
