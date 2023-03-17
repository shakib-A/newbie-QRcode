/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'White': 'hsl(0, 0%, 100%)',
        'lightgray': 'hsl(212, 45%, 89%)',
        'grayblue': 'hsl(220, 15%, 55%)',
        'darkblue': 'hsl(218, 44%, 22%)',
      }
    },
  },
  plugins: [],
}
