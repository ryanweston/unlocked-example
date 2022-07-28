<script lang="ts" setup>
import { mdiArrowRight } from '@/utils/icons'

export interface Item {
  available: boolean
  name?: string
  route?: {
    path?: string
  }
}

const props = defineProps<{
  item: Item
}>()
</script>

<template>
  <a :href="`/compositions/${item.route?.path}` " :class="[!item.available ? 'opacity-40 cursor-not-allowed pointer-events-none' : '', 'w-full rounded-lg bg-layoutBackground flex flex-row items-center py-4 px-6 text-text rounded-lg group hover:bg-primary']">
    <u-body class="group-hover:text-textContrast">{{ item.available ? item.name : 'Coming soon' }}</u-body>
    <u-icon class="text-textContrast hidden group-hover:block ml-auto">{{ mdiArrowRight }}</u-icon>
  </a>
</template>
