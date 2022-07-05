// const tokens = require('@unlocked/foundation/tokens')

// TODO: Look for a better way to handle Tailwind's purge

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './node_modules/@unlocked/foundation/dist/**/**/**/*.{js,css}', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Inter var"'],
    },
    extend: {
      colors: {
        text: '#FFFFFF',
        primary: '#FFFFFF',
        layoutBackground: '#fbfbfb',
        error: '#cf2121',
        warning: '#ffcc00',
        success: '#169d00',
        textContrast: '#000000',
        background: '#000000',
        layoutHover: '#FFFFFF',
        layoutBorder: '#1c1c1c',
        layoutContrast: '#0d0d0d',
        layoutHeavyContrast: '#FFFFFF',
        link: '#0068c8',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
