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
        Rubik: ["Rubik", "sans-serif"],
        sans: ["aveat", "cursive"],
        mono: [""],
      },
      animation: {
        bounce: "bounce 2s",
      },
      keyframes: {
        bounce: {
          "0%": {
            transform: "translateY(-50%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "25%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "100%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
