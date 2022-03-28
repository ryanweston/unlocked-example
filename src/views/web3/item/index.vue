<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { defineAsyncComponent, ref } from 'vue'
import { mdiArrowLeft, mdiClipboardFileOutline } from '@mdi/js'
// @ts-expect-error look at plugin repo
import Markdown from './pages/connect-wallet/component.md'
const route = useRoute()

const compActive = ref(true)

function changeStatus(value: boolean) {
  compActive.value = value
}

const isComponent = defineAsyncComponent(() =>
  import(`./pages/${route.meta.path}/component.vue`),
)
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:pt-28 lg:pb-6 lg:px-8">
    <Button class="mb-6" href="/web3" type="text">
      <template #prefixIcon>
        <Icon>
          {{ mdiArrowLeft }}
        </Icon>
      </template>
      Back to components
    </Button>
    <Title>{{ route.meta.title }}</Title>
    <Subtitle class="mt-2">
      {{ route.meta.subtitle }}
    </Subtitle>
  </div>

  <div class="mx-auto max-w-screen-xl r px-4 py-12 sm:px-6 lg:pt-12 lg:pb-14 lg:px-8">
    <div class="flex flex-row w-full">
      <Button :type="!compActive ? 'secondary': 'default'" @click="() => {changeStatus(true)}">
        HTML
      </Button>
      <Button class="ml-2" :type="compActive ? 'secondary': 'default'" @click="() => {changeStatus(false)}">
        Code
      </Button>
      <Button type="alternate" class="ml-2 ml-auto">
        <Icon>
          {{ mdiClipboardFileOutline }}
        </Icon>
      </Button>
    </div>
    <div :class="[compActive ? 'flex items-center justify-center' : '', 'mt-4 h-80 w-full rounded-md overflow-scroll border border-greyBorder bg-grey resize-y']">
      <component :is="isComponent" v-show="compActive" />
      <Markdown v-show="!compActive" />
    </div>
  </div>
</template>
