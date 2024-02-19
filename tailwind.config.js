/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brend: {
          "#898989": "#898989",
          "#00b533": "#00b533",
          "#f8f8f8": "#f8f8f8"
        }
      },
      lineHeight: {
        "85px": "85px"
      }
    },
  },
  plugins: [],
}

