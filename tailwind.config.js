const defaultTheme = require('tailwindcss/defaultTheme');

// line height ratio: 1,428571428571429

module.exports = {
  mode: 'jit',
  purge: [
    './src/templates/**/*.html',
  ],
  darkMode: false,
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      primary: '#1565c0',
    },
    textOpacity: {
      'high': '0.87',
      'medium': '0.60',
      'disabled': '0.38',
    },
    fontFamily: {
      sans: [
        "'Roboto'",
        ...defaultTheme.fontFamily.sans,
      ],
    },
    fontSize: {
      headline1: ['6rem', {
        letterSpacing: '-0.09375rem',
        lineHeight: '8.5625rem',
      }],
      headline2: ['3.75rem', {
        letterSpacing: '-0.03125rem',
        lineHeight: '5.3125rem',
      }],
      headline3: ['3rem', {
        letterSpacing: '0rem',
        lineHeight: '4.25rem',
      }],
      headline4: ['2.125rem', {
        letterSpacing: '0.015625rem',
        lineHeight: '3rem',
      }],
      headline5: ['1.5rem', {
        letterSpacing: '0rem',
        lineHeight: '2.125rem',
      }],
      headline6: ['1.25rem', {
        letterSpacing: '0.009375rem',
        lineHeight: '1.75rem',
      }],
      subtitle1: ['1rem', {
        letterSpacing: '0.009375rem',
        lineHeight: '1.375rem',
      }],
      subtitle2: ['0.875rem', {
        letterSpacing: '0.00625rem',
        lineHeight: '1.25rem',
      }],
      body1: ['1rem', {
        letterSpacing: '0.03125rem',
        lineHeight: '1.375rem',
      }],
      body2: ['0.875rem', {
        letterSpacing: '0.015625rem',
        lineHeight: '1.25rem',
      }],
      button: ['0.875rem', {
        letterSpacing: '0.078125rem',
        lineHeight: '1.25rem',
      }],
      caption: ['0.75rem', {
        letterSpacing: '0.025rem',
        lineHeight: '1.0625rem',
      }],
      overline: ['0.625rem', {
        letterSpacing: '0,09375rem',
        lineHeight: '0.875rem',
      }],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
    },
    minWidth: {
      '16': '4rem',
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
