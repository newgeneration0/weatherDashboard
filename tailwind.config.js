/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "wea":"url('/src/media/clouds-3189322_640.jpg')"
      }
    },
  },
  plugins: [],
}