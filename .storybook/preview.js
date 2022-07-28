export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import { app } from '@storybook/vue3';
import { defaultTheme, unlockedGlobal } from '@unlocked/foundation'
import '../src/tailwind.css'
import '../public/font/inter.css'

app.use(unlockedGlobal, { 
  theme: defaultTheme
})