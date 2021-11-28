module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    preflight: true
  },
  //prefix: 'th-',
  theme: {
    extend: {
      colors: {
        tea: {
          light: '#94CC33',
          DEFAULT: '#798750',
          dark: '#637144'
        },
      },
      height: {
        'main-banner': '396px',
        'main-banner-md' : '623px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
