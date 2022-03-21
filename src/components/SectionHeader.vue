<script lang="ts" setup>
const props = defineProps({
  title: String,
  subtitle: String
})
</script>

<template>
  <div class="max-w-md">
    <Subtitle>
      {{ subtitle }}
    </Subtitle>
    <Title>
      {{ title }}
    </Title>
  </div>
</template>