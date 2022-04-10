<script lang="ts" setup>
import ListItem from './components/item.vue'

const items = [
  { name: 'Connect wallet', available: true, to: '/web3/connect-wallet' },
  { name: 'Transaction indicator', available: false },
  { name: 'Balance', available: false },
  { name: 'Send modal', available: false },
  { name: 'Wallet address', available: false },
  { name: 'Transaction status', available: false },
  { name: 'QR Code', available: false },
]
</script>

<template>
  <div class="mx-auto max-w-screen-xl text-center px-4 py-12 sm:px-6 lg:pt-28 lg:pb-14 lg:px-8">
    <!-- <div class="absolute w-50">
    <img class="h-50 w-auto" src="/logo-icon-web3.svg"/>
  </div> -->
    <u-headline>Unlocked Web3</u-headline>
    <u-subtitle class="mt-2">
      A selection of Web3 components and guides to help get your application going.
    </u-subtitle>
  </div>

  <div class="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:pb-28 lg:pt-14 lg:px-8">
    <div class="grid grid-cols-4 gap-4">
      <template v-for="item in items" :key="item.name">
        <ListItem :item="item" />
      </template>
    </div>
  </div>
</template>
