/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#2f2f30",
      },
      colors: {
        primary: "#a4a6a8",
      },
      fontFamily: {
        sans: ["aveat", "cursive"],
      },
    },
  },
  plugins: [],
};
