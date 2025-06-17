/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // add this if not already
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
   plugins: [
    require('daisyui'),
  ],
}