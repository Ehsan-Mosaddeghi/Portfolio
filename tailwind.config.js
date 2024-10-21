// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");

import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundColor: {
        menu: "var(--bg-menu)",
        skill: "var(--bg-skill)",
      },
      colors: {
        primary: "var(--text-primary)",
        menu: "var(--text-menu)",
        menuActive: "var(--menu-active)",

        from: "var(--bg-from)",
        to: "var(--bg-to)",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
        sans: ["Mukta", "sans-serif"],
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

  darkMode: ["selector"],
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
