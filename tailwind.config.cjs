/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*/index.html",
    "src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
       'lightred': 'hsl(0, 100%, 67%)',
       'orangeyyellow': 'hsl(39, 100%, 56%)',
       'greenteal': 'hsl(166, 100%, 37%)',
       'cobaltblue': 'hsl(234, 85%, 45%)',

       //gradients
        'lightslateblue': 'hsl(252, 100%, 67%)', //bg
        'lightroyalblue': 'hsl(241, 81%, 54%)', //bg

        'violeblue': 'hsla(256, 72%, 46%, 1)', //circle
        'persianblue': 'hsla(241, 72%, 46%, 0)', //circle

        //neutral
         'white': 'hsl(0, 0%, 100%)',
         'paleblue': 'hsl(221, 100%, 96%)',
         'lightlavender': 'hsl(241, 100%, 89%)',
         'darkgrayblue': 'hsl(224, 30%, 27%)',

      }
    },
  },
  plugins: [],
}
