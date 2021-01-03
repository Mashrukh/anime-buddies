const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/CastleInTheSky.jpg')"
       })
    }
  },
  variants: {
    extend: {
      backgroundAttachment: ['hover', 'focus']
    },
  },
  plugins: [],
}
