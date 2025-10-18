/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans JP', 'system-ui', 'sans-serif'],
      },
      colors: {
        'brand': '#ffcb05',
        'brand-dark': '#b98c00',
      }
    },
  },
  plugins: [],
}