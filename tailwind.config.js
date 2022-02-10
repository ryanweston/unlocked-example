// const defaultTheme = require('tailwindcss/defaultTheme')
// const unlockedTailwind = require('@unlocked/foundation/tailwind.config.js')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './node_modules/@unlocked/foundation/dist/**/**/**/*.{js,css}','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    // colors: {
    //   'blue': '#000000',
    //   'black': '#000000'
    // },
  //  ...unlockedTailwind.theme,
    fontFamily: {
      sans: ['"Inter var"'],
    },
    // extend: {
    //   colors: {
    //    'black': 'red'
    //   },
    // }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
