const tokens = require('@unlocked/foundation/tokens')

// TODO: Look for a better way to handle Tailwind's purge

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './node_modules/@unlocked/foundation/dist/**/**/**/*.{js,css}', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Inter var"'],
    },
    extend: {
      ...tokens,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
