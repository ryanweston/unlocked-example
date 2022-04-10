<script lang="ts" setup>
import { mdiArrowLeft } from '@mdi/js'
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-36 lg:px-none">
    <div class="w-full text-center">
      <u-headline>404</u-headline>
      <u-subtitle class="mt-2">
        Your page could not be found
      </u-subtitle>

      <u-button class="mt-12" href="/web3" type="text">
        <template #prefixIcon>
          <u-icon>
            {{ mdiArrowLeft }}
          </u-icon>
        </template>
        Back to homepage
      </u-button>
    </div>
  </div>
</template>
