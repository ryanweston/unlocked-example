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
  <a :href="`/compositions/${props.item.route?.path}` " :class="[!props.item.available ? 'opacity-40 cursor-not-allowed pointer-events-none' : '', 'w-full rounded-lg bg-interfaceOne flex flex-row items-center py-4 px-6 text-textOne rounded-lg group hover:bg-interactivePrimary']">
    <u-body class="group-hover:text-textInverse">{{ props.item.available ? props.item.name : 'Coming soon' }}</u-body>
    <u-icon class="text-textInverse hidden group-hover:block ml-auto">{{ mdiArrowRight }}</u-icon>
  </a>
</template>
