/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'mons':['Montserrat']
      },
      boxShadow: {
        'bShadow': '0px 4px 19px 0px rgba(210, 209, 209, 0.25);',
      }
    },
  },
  plugins: [],
}

