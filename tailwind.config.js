/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C9A961', // Gold/Tan
        accent: '#DC143C', // Red
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};