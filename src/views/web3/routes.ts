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
  {
    path: '/web3/wallet-address',
    component: ItemPage,
    meta: {
      title: 'Wallet address component',
      path: 'wallet-address',
      subtitle: 'Display a wallet address using Unlocked Web3 utils.',
    },
  },
]
