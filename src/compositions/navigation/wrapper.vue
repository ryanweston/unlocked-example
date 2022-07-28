<script lang="ts" setup>
import navigation from './code/component.vue'
import type { INavigationItems } from './code/component.vue'

const items: Array<INavigationItems> = [
  { text: 'Documentation', href: 'http://docs.unlocked.to', size: 'small', type: 'text' },
  { text: 'Our mission', href: '/mission', size: 'small', type: 'text' },
  { text: 'Compositions', href: '/compositions', size: 'small', type: 'text' },
  { text: 'Products', href: 'https://github.com/orgs/UnlockedUI', size: 'small', type: 'text' },
  { text: 'Install Unlocked', href: '#', size: 'small', type: 'default' },
]
</script>

<template>
  <navigation :items="items" />
</template>
