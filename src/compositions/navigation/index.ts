import type { IDocumentation } from '@/utils/types'

const content: IDocumentation = {
  hasClasses: true,
  packages: ['@unlocked/base', '@headless-ui', '@heroicons/vue'],
  content: [
    {
      title: 'Overview',
      content: 'The component consists of several slots for customisation. A mobile menu button slot, a left side of the navigation slot, a right side of the navigation slot and a mobile menu slot. These are pretty self explantory and don\'t expose any necessary props.',
    },
    {
      title: 'Installation',
      content: 'Please be aware that the component code assumes that you have Unlocked base components globally registered. For modular installation of Unlocked, you will need to import the Unlocked buttonm and title components within your setup.',
    },
    {
      title: 'Guidance',
      content: 'Firstly, please ensure you have read through the documentation link provided on the page. Head\'s up, these components aren\'t cut and dry and will most likely need some adjustments to fit into your code base.',
    },
  ],
}

export default content
