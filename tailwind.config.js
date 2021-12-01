const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './src/templates/**/*.html',
  ],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        sans: [
          "'Poppins'",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
