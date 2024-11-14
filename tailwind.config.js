/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "ComicNeue-Bold": ["ComicNeue-Bold","sans-serif"],
        "ComicNeue-Regular": ["ComicNeue-Regular","sans-serif"],
        "ComicNeue-Light": ["ComicNeue-Light","sans-serif"],

      }
    },
  },
  plugins: [],
}

