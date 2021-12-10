const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/templates/**/*.html',
  ],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: [
        "'Inter'",
        ...defaultTheme.fontFamily.sans,
      ],
    },
    container: {
      center: true,
    },
    extend: {
      spacing: {
        container: '760px',
      },
    },
  },
  variants: {
    extend: {},
  },
}
