/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      minHeight: {
        14: "3.25rem",
      },
      colors: {
        primary: {
          100: "#d9042b",
          200: "#9a031f",
        },
        red: {
          50: "#fbe6ea",
          100: "#f3b1bd",
          200: "#ee8c9d",
          300: "#e65771",
          400: "#e13655",
          500: "#d9042b",
          600: "#c50427",
          700: "#9a031f",
          800: "#770218",
          900: "#5b0212",
        },
        black: {
          50: "#ebebeb",
          100: "#c0c0c0",
          200: "#a1a1a1",
          300: "#767676",
          400: "#5c5c5c",
          500: "#333333",
          600: "#2e2e2e",
          700: "#242424",
          800: "#1c1c1c",
          900: "#151515",
        },
        sky: {
          500: "#05afda",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
