module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '375px',

      'md': '734px',

      '-md': {'max': '734px'},

      'lg': '1068px',

      'xl': '1440px',

      '2xl': '1536px',
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
