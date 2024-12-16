/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css", "./index.html"],
  theme: {
    extend: {
      colors: {
        brown: {
          dark: "#423A3A",
          default: "#CE9898",
          light: "#EE8B8B",
        },
        white: "#FFFFFF",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #F8BFBF 0%, #EE8B8B 100%)",
      },
      fontFamily: {
        Joseph: ["Josefin Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

