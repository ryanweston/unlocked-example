const compositions = [
  {
    name: 'Molecules',
    desc: 'Molecular components.',
    icon: 'mdiAtom',
    items: [
      { name: 'Dropdown', available: true, route: { path: 'dropdown', title: 'Dropdown', subtitle: 'Dropdown component with styles.' } },
      { name: 'Breadcrumbs', available: true, route: { path: 'breadcrumbs', title: 'Breadcrumbs', subtitle: 'Breadcrumbs component with styles' } },
      { name: 'Button group', available: true, route: { path: 'button-group', title: 'Button group', subtitle: 'Button groups' } },
      { name: 'Inputs', available: false },
      { name: 'Pagination', available: false },
      { name: 'Search', available: false },
      { name: 'QR Code', available: false },
      { name: 'QR Code', available: false },
      { name: 'Pagination', available: false },
      { name: 'Search', available: false },
      { name: 'QR Code', available: false },
      { name: 'QR Code', available: false },
    ],
  },
  {
    name: 'Organisms',
    desc: 'Organism components.',
    icon: 'mdiDna',
    items: [
      { name: 'Navigation', available: true, route: { path: 'navigation', title: 'Navigation', subtitle: 'Responsive navigation component with styles' } },
      { name: 'Footer', available: true, route: { path: 'footer', title: 'Footer', subtitle: 'Responsive footer component with styles' } },
      { name: 'Table', available: false },
      { name: 'Form', available: false },
      { name: 'Tabs', available: false },
      { name: 'Transaction status', available: false },
      { name: 'QR Code', available: false },
      { name: 'QR Code', available: false },
      { name: 'Send modal', available: false },
      { name: 'Transaction status', available: false },
      { name: 'QR Code', available: false },
      { name: 'QR Code', available: false },
    ],
  },
]

// {
//   name: 'Templates',
//   desc: 'Template components.',
//   icon: 'mdiFinance',
//   items: [
//     { name: 'Connect wallet', available: true },
//     { name: 'Wallet address', available: true },
//     { name: 'Transaction indicator', path: 'transaction-indicator', available: true },
//     { name: 'Balance', available: true },
//     { name: 'Send modal', available: true },
//     { name: 'Transaction status', available: true },
//     { name: 'QR Code', available: true },
//     { name: 'QR Code', available: true },
//   ],
// },

export default compositions
