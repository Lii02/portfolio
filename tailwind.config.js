/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      oswald: ['Oswald', 'sans-serif'],
      oxygen: ['Oxygen', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
};