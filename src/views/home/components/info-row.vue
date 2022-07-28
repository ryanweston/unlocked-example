<script lang="ts" setup>
export interface Item {
  icon: string
  title: string
  content: string
}

const prop = defineProps<{ items: Item[] }>()
</script>

<template>
  <div class="flex flex-col md:flex-row w-100 items-center justify-between mx-auto">
    <div v-for="(item, i) in items" :key="i" :class="[i > 0 ? 'md:ml-10 ' : '', 'flex-column mt-10 lg:mt-0']">
      <!-- Title -->
      <div class="flex flex-row items-center font-bold text-lg">
        <div v-html="item.icon" />
        <h3 class="font-bold text-lg ml-2">
          {{ item.title }}
        </h3>
      </div>

      <!-- Body -->
      <u-body class="mt-2 text-layoutHeavyContrast">
        {{ item.content }}
      </u-body>
    </div>
  </div>
</template>
