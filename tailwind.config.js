const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.js", "./layouts/**/*.js", "./pages/**/*.js"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "light-blue": colors.lightBlue,
        "cyan": colors.cyan,
        "fuschia": colors.fuchsia,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [typography, forms],
};
