<script lang="ts" setup>
import dropdown from './code/component.vue'

const items = [
  { text: 'Component library', href: 'https://github.com/UnlockedUI/unlocked-ui', iconSrc: '/images/logo/logo-icon-dark.svg' },
  { text: 'Figma kit', href: 'https://www.figma.com/file/3RLpJ0ZEXlbIBYLTUtLaL9/Unlocked?node-id=0%3A1', disabled: false, iconSrc: '/images/figma.svg' },
]
</script>

<template>
  <dropdown :items="items" text="Products" />
</template>
