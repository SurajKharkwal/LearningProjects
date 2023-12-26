/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': {opacity:1 },
          '100%': {opacity:0, transform: 'translateY(46px)'}
        }
      }
    },
  },
  plugins: [],
}