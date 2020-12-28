const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./components/**/*.js', './layouts/**/*.js', './pages/**/*.js'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        fuschia: colors.fuchsia,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
