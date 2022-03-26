<script setup>
import ListItem from './item.vue'
</script>

<template>
<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-28 lg:px-8">
  <Headline>Unlocked Web3</Headline>
  <Subtitle class="mt-2">A selection of Web3 components and guides to help get your application going.</Subtitle>
</div>

<div class="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:py-16 lg:px-8">
  <Title>Components</Title>
  <div class="mt-8 grid grid-cols-4 gap-4">
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />

    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
  </div>
</div>

</template>
