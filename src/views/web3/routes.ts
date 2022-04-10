import ItemPage from './item/index.vue'

export const web3Routes = [
  {
    path: '/web3/connect-wallet',
    component: ItemPage,
    meta: {
      title: 'Connect Wallet Component',
      path: 'connect-wallet',
      subtitle: 'Use WalletConnect to responsively onboard your Web3 users.',
    },
  },
  { path: '/web3/transaction-indicator', component: ItemPage, meta: { title: 'Transaction indicator', path: 'transaction-indicator' } },
]
