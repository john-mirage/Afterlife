const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/templates/**/*.html',
  ],
  darkMode: 'media',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
    },
    fontFamily: {
      sans: [
        "'Inter'",
        ...defaultTheme.fontFamily.sans,
      ],
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
}
