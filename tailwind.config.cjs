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
      animation: {
        // 'fade-in': 'fade-in 0s ease calc(var(--fade-in-step) * 0s) both',
        'fade-in': 'fade-in 3s ease calc(var(--fade-in-step) * 0.4s) both',
        sunrise: 'sunrise 3s ease 0.5s both',
        'face-bob-up-and-down':
          'face-bob-up-and-down 4s ease-in-out 3.5s infinite both',
        'arrow-bob-right-and-left':
          'arrow-bob-right-and-left 2.3s ease-in-out 5s infinite both',
        'arrow-bob-right-and-left-fast':
          'arrow-bob-right-and-left 1s ease-in-out 0.2s infinite both',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        sunrise: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'face-bob-up-and-down': {
          '0%, 100%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'arrow-bob-right-and-left': {
          '0%, 20%, 40%': { transform: 'translateX(0)' },
          '10%, 30%': { transform: 'translateX(10px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
