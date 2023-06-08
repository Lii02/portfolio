/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      oswald: ["Oswald"],
      montserrat: ["Montserrat"]
    },
    extend: {},
  },
  plugins: [],
}