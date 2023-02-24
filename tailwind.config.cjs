/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{astro,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontSize: {
        'sm+': '0.9375rem', // 15px
      },
      fontFamily: {
        display: ['Permanent Marker', 'cursive'],
        serif: ['Merriweather', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        sunsetOrange: 'rgb(212,214,197)',
        sunsetBlue: 'rgb(137,184,232)',
      },
      listStyleType: {
        dash: "'– '",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
