/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        border: '#000000',
        'border-light': '#e5e5e5',
        'border-dark': '#333333',
      }
    },
  },
  plugins: [],
}
