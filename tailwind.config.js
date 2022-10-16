/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      monserrat: 'monserrat',
      antonio: 'antonio'
    },
    
    extend: {
      colors: {
        logo_orange: '#AC9A12',
        logo_orange_dark: '#F49423',
        logo_green: '#468820',
        logo_green_dark: '#68C631',
        logo_blue: '#3A619A',
        logo_blue_dark: '#83B1F5'
      },
    },
  },
  plugins: [],
}
