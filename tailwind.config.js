
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily:{
        body: ['Nunito'],
        header: ['Poppins']
      },
      colors:{
        primary: {
          1: "#fff",
          2: "#0F70B5",
          3: "#083A5E"
        },
        secondary:{
          "main": "#2F2F2F",
          "exec": "#F4D35E",
          "mint":"#C9FBFF",
          "hover": "#85BDBF"
        }
      }
    },
  },
  plugins: [],
}
