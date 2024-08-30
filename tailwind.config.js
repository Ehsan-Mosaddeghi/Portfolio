/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#2f2f30",
      },
      colors: {
        primary: "#d3d3d3",
      },
      fontFamily: {
        sans: ["aveat", "cursive"],
      },
    },
  },
  plugins: [],
};
