const colors = require("tailwindcss/colors");

// Avoid warnings about deprecated colors:
const simpleColors = Object.assign({}, colors);
delete simpleColors.coolGray;
delete simpleColors.trueGray;
delete simpleColors.warmGray;
delete simpleColors.blueGray;
delete simpleColors.lightBlue;

module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: Object.assign({}, simpleColors, {
        inspireOrange: "#f24b0f",
        inspireYellow: "#ffbb0d",
        inspireTrueOrange: "#f1861a",
      }),
    },
  },
  plugins: [],
}
