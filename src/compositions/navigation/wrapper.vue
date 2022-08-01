<script lang="ts" setup>
import type { ButtonProps } from '@unlocked/base'
import navigation from './code/component.vue'

const items: Array<ButtonProps> = [
  { text: 'Documentation', href: 'http://docs.unlocked.to', size: 'small', type: 'text' },
  { text: 'Our mission', href: '/mission', size: 'small', type: 'text' },
  { text: 'Compositions', href: '/compositions', size: 'small', type: 'text' },
  { text: 'Products', href: 'https://github.com/orgs/UnlockedUI', size: 'small', type: 'text' },
  { text: 'Install Unlocked', href: '#', size: 'small', type: 'primary' },
]
</script>

<template>
  <navigation brand="Unlocked" :items="items" />
</template>
