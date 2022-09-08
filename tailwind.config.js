/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm-xxs": "40px",
        "sm-xs" : "250px",
        "sm-s": "400px",
        "lg-1": '1204px'
      }
    },
  },
  plugins: [],
}
