<script lang="ts" setup>
export interface Item {
  icon: string
  title: string
  content: string
}

const props = defineProps<{ items: Item[] }>()
</script>

<template>
  <div class="flex flex-col md:flex-row w-100 items-center justify-between mx-auto">
    <div v-for="(item, i) in props.items" :key="i" :class="[i > 0 ? 'md:ml-10 ' : '', 'flex-column mt-10 lg:mt-0']">
      <!-- Title -->
      <div class="flex flex-row items-center font-bold text-lg">
        <div v-html="item.icon" />
        <u-headline :size="5" class="ml-3">
          {{ item.title }}
        </u-headline>
      </div>

      <!-- Body -->
      <u-body class="mt-2 text-textTwo">
        {{ item.content }}
      </u-body>
    </div>
  </div>
</template>
