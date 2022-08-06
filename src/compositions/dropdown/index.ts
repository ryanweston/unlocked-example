import type { IDocumentation } from '@/utils/types'

const content: IDocumentation = {
  hasClasses: true,
  packages: ['@unlocked/base', '@headless-ui', '@heroicons/vue'],
  content: [
    {
      title: 'Overview',
      content: 'The component consists of two slots, the activator slot to change the interactive of the dropdown, and the default slot to adjust the dropdown item. The default slot exposes an active prop and an item prop.',
    },
    {
      title: 'Installation',
      content: 'Please be aware that the component code assumes that you have Unlocked base components globally registered. For modular installation of Unlocked, you will need to import the Unlocked button and icon components within your setup.',
    },
    {
      title: 'Guidance',
      content: 'Firstly, please ensure you have read through the documentation link provided on the page. Head\'s up, these components aren\'t cut and dry and will most likely need some adjustments to fit into your code base.',
    },
  ],
}

export default content
