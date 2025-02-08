/** @type {import('tailwindcss').Config} */
const plugin = require("tailwind-clip-path");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customePink: {
          500: "#EC407A",
          200: "#F8BBD0",
          100: "#F9A8D4",
          300: "#FFE4E6",
          600: "#FB7185",
        },
        customeRed: {
          400: "#FB7185",
        },
        customeBackGroundColor: {
          200: "#F5F5F5",
        },
        customeFooter: {
          600: "#880E4F",
        },
        customeLinkBox: {
          200: "#FECDD3",
        },
      },
      boxShadow: {
        custome1: "0 0 9px rgba(0, 0, 0, 0.12)",
        custome2: "0 0 5px rgba(0, 0, 0, 0.17)",
        custome3: "0 1px 3px rgba(0, 0, 0, 0.1)",
        custome4: "-2px 2px 10px 0px #BE185D",
        custome5: "0 0 4px rgba(0, 0, 0, 0.12)",
        custome6: "0px 0px 10px 0px rgba(0, 0, 0, 0.16)",
      },
      screens: {
        custome_md: "851px",
        custome_sm:"470px"
      },
    },
  },
  plugins: [plugin],
};
