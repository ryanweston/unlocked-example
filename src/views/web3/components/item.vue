<script lang="ts" setup>
const props = defineProps({
  item: Object,
})

</script>

<template>
  <a :href="item.to" :class="[!item.available ? 'opacity-60 cursor-not-allowed pointer-events-none' : '', 'w-full border-solid border border-greyBorder rounded-lg divide-y divide-greyBorder hover:shadow']">
    <div class="w-full flex items-center justify-between space-x-6">
      <div class="flex-1">
        <img class="w-full h-auto bg-gray-300 flex-shrink-0" src="/images/stacked.png" alt="">
      </div>
    </div>
    <div>
      <div class="-mt-px flex divide-x divide-greyBorder">
        <div class="w-0 flex-1 flex">
          <div class="relative -mr-px w-0 flex-1 inline-flex py-4 px-6 text-sm text-gray-700 font-medium rounded-bl-lg hover:text-gray-500">
            <span>{{ item.name }}</span>
          </div>
        </div>

      </div>
    </div>
  </a>
</template>
