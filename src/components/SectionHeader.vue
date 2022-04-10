<script lang="ts" setup>
const props = defineProps({
  title: String,
  subtitle: String,
})
</script>

<template>
  <div class="max-w-md">
    <u-subtitle class="text-gray-300">
      {{ subtitle }}
    </u-subtitle>
    <u-title>
      {{ title }}
    </u-title>
  </div>
</template>
