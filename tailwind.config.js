/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        mine: "rgba(0, 0, 0, 0.2) 0px 1px 6px 2px",
      },
    },
  },
  plugins: [],
};
