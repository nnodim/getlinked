/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Montserrat', 'sans-serif'],
        unica: ['Unica One', 'cursive'],
        clash: ['Clash Display', 'sans-serif'],
      },
      colors: {
        'color-1': '#150E28',
        'color-2': '#903AFF',
        'color-3': '#D434FE',
        'background-color-1': 'rgba(255, 255, 255, 0.03);',
        'background-color-2': 'rgba(21, 14, 40, 0.93);',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%);',
      },
      boxShadow: {
        card: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      },
    },
  },
  plugins: [],
};
