<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { defineAsyncComponent, ref } from 'vue'
import { mdiArrowLeft, mdiClipboardFileOutline, mdiCodeTags, mdiEye } from '@mdi/js'
import { useClipboard } from '@vueuse/core'
// @ts-expect-error look at plugin repo
import Markdown from './pages/connect-wallet/component.md'
const route = useRoute()

const compActive = ref(true)
const codeBlockText = ref()

function changeStatus(value: boolean) {
  compActive.value = value
}

const { copy } = useClipboard()

const isComponent = defineAsyncComponent(() =>
  import(`./pages/${route.meta.path}/component.vue`),
)
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:pt-14 lg:pb-6 lg:px-8">
    <u-button class="mb-12" href="/web3" type="text">
      <template #prefixIcon>
        <u-icon>
          {{ mdiArrowLeft }}
        </u-icon>
      </template>
      Back to components
    </u-button>
    <u-title>{{ route.meta.title }}</u-title>
    <u-subtitle class="mt-2">
      {{ route.meta.subtitle }}
    </u-subtitle>
  </div>

  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:pt-6 lg:pb-14 lg:px-8">
    <div class="flex flex-row w-full">
      <u-button group first :active="compActive" @click="() => {changeStatus(true)}">
        <template #prefixIcon>
          <u-icon>
            {{ mdiEye }}
          </u-icon>
        </template>
        Preview
      </u-button>
      <u-button group last :active="!compActive" @click="() => {changeStatus(false)}">
        <template #prefixIcon>
          <u-icon>
            {{ mdiCodeTags }}
          </u-icon>
        </template>
        Code
      </u-button>

      <u-tooltip class="ml-auto">
        <template #activator="{reveal}">
          <u-button
            type="alternate"
            @click="() => { copy(codeBlockText.children[0].innerText); reveal(3000) }"
          >
            <u-icon>
              {{ mdiClipboardFileOutline }}
            </u-icon>
          </u-button>
        </template>
        Copied!
      </u-tooltip>
    </div>
    <div :class="[compActive ? 'flex items-center justify-center' : '', 'mt-4 h-96 w-full rounded-md overflow-scroll border border-layoutBorder bg-grey resize-y']">
      <component :is="isComponent" v-show="compActive" />
      <div ref="codeBlockText">
        <Markdown v-show="!compActive" />
      </div>
    </div>
  </div>
</template>
