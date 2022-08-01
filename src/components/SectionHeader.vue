<script lang="ts" setup>
const props = defineProps<{
  title: string
  subtitle: string
}>()

</script>

<template>
  <div class="max-w-md">
    <u-subtitle class="text-textTwo">
      {{ subtitle }}
    </u-subtitle>
    <u-headline :size="3">
      {{ title }}
    </u-headline>
  </div>
</template>
