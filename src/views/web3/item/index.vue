<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { defineAsyncComponent, ref } from 'vue'
import { mdiArrowLeft, mdiCodeTags, mdiEye, mdiClipboardFileOutline } from '@mdi/js'
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
    <Button class="mb-12" href="/web3" type="text">
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

  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:pt-6 lg:pb-14 lg:px-8">
    <div class="flex flex-row w-full">
      <Button group first :active="compActive" @click="() => {changeStatus(true)}">
        <template #prefixIcon>
          <Icon>
            {{ mdiEye }}
          </Icon>
        </template>
        Preview
      </Button>
      <Button group last :active="!compActive" @click="() => {changeStatus(false)}">
        <template #prefixIcon>
          <Icon>
            {{ mdiCodeTags }}
          </Icon>
        </template>
        Code
      </Button>

      <Tooltip class="ml-auto">
        <template #activator="{on, reveal}">
          <Button
            type="alternate"
            @click="() => { copy(codeBlockText.children[0].innerText); reveal(3000) }"
          >
            <Icon>
              {{ mdiClipboardFileOutline }}
            </Icon>
          </Button>
        </template>
        Copied!
      </Tooltip> 
    </div>
    <div :class="[compActive ? 'flex items-center justify-center' : '', 'mt-4 h-96 w-full rounded-md overflow-scroll border border-greyBorder bg-grey resize-y']">
      <component :is="isComponent" v-show="compActive" />
      <div ref="codeBlockText">
        <Markdown v-show="!compActive" />
      </div>
    </div>
  </div>
</template>
