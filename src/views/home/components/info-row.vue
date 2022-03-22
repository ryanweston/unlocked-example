<script lang="ts" setup>
interface Item {
  icon: string,
  title: string,
  content: string
}

interface Props {
  items: Item[]
}

const prop = defineProps<Props>()
</script>

<template>
  <div class="flex w-100 items-center justify-between mx-auto">
    <div :class="[i > 0 ? 'ml-10' : '', 'flex-column']" v-for="(item, i) in items" :key="i">
      <!-- Title -->
      <div class="flex flex-row items-center font-bold text-lg">
        <div v-html="item.icon"></div>
        <h3 class="font-bold text-lg ml-2">
          {{ item.title }}
        </h3>
      </div>
      
      <!-- Body -->
      <p class="mt-2">
        {{ item.content }}
      </p>
    </div>
  </div>
</template>