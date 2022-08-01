const tokens = require('./src/utils/tokens')
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  content: ['./index.html', './node_modules/@unlocked/base/dist/esm/**/*.{js,css,ts,vue}', './src/**/*.{vue,js,ts,jsx,tsx}', './theme.js'],
  theme: {
    fontFamily: {
      sans: ['"Inter var"'],
    },
    extend: {
      colors: { ...tokens },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
