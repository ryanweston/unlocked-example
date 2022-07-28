<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { defineAsyncComponent, onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import { mdiArrowLeft, mdiClipboardFileOutline, mdiCodeTags, mdiEye } from '@/utils/icons'
import type { IDocumentation } from '@/utils/types'

type ActiveState = 'component' | 'classes' | 'code'

const activeTab: Ref<ActiveState> = ref('component')
const documentation = ref()
const hasClasses = ref()

// Imported markdown content
const codeText = ref()
const classesText = ref()

const route = useRoute()
const { copy } = useClipboard()

function changeStatus(value: ActiveState) {
  activeTab.value = value
}

// Copy active markdown content to clipboard
const copyContent = (callback: Function) => {
  activeTab.value === 'classes'
    ? copy(classesText.value.children[0].innerText)
    : copy(codeText.value.children[0].innerText)
  callback(3000)
}

// Use route information to get dynamic content url
const url = `../../../compositions/${route.meta.path}/`

// Dynamically import the component documentation
onMounted(async() => {
  const index = ((await import(`../../../compositions/${route.meta.path}/index.ts`)).default) as IDocumentation
  documentation.value = index

  if (documentation.value.hasClasses)
    hasClasses.value = true
})

const ClassesMD = defineAsyncComponent(() =>
  import(`../../../compositions/${route.meta.path}/code/classes.md`),
)

const CodeMD = defineAsyncComponent(() =>
  import(`../../../compositions/${route.meta.path}/component.md`),
)

const isComponent = defineAsyncComponent(() =>
  import(`../../../compositions/${route.meta.path}/wrapper.vue`),
)
</script>

<template>
  <!-- Header section -->
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:pt-14 lg:pb-6 lg:px-8">
    <u-button class="mb-12" href="/compositions" type="text">
      <template #prefixIcon>
        <u-icon>
          {{ mdiArrowLeft }}
        </u-icon>
      </template>
      Back to components
    </u-button>
    <u-title>{{ route.meta.title }}</u-title>
    <u-subtitle class="text-layoutHeavyContrast mt-2">
      {{ route.meta.subtitle }}
    </u-subtitle>
  </div>

  <!-- Navigation & tools section -->
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:pt-6 lg:pb-14 lg:px-8">
    <div class="flex flex-row w-full">
      <u-button group first :active="activeTab === 'component'" @click="() => {changeStatus('component')}">
        <template #prefixIcon>
          <u-icon>
            {{ mdiEye }}
          </u-icon>
        </template>
        Preview
      </u-button>
      <u-button v-if="hasClasses" group :active="activeTab === 'classes'" @click="() => {changeStatus('classes')}">
        <template #prefixIcon>
          <u-icon>
            {{ mdiEye }}
          </u-icon>
        </template>
        Classes
      </u-button>
      <u-button group last :active="activeTab === 'code'" @click="() => {changeStatus('code')}">
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
            @click="() => { copyContent(reveal)}"
          >
            <u-icon>
              {{ mdiClipboardFileOutline }}
            </u-icon>
          </u-button>
        </template>
        Copied!
      </u-tooltip>
    </div>

    <!-- Display section  -->
    <div class="mt-8 h-96 w-full rounded-md overflow-scroll border border-layoutBorder bg-grey resize-y">
      <div v-if="activeTab === 'component'" class="flex items-center justify-center bg-layoutBackground h-full">
        <component :is="isComponent" v-show="activeTab === 'component'" />
      </div>

      <div v-if="activeTab === 'classes'">
        <div ref="classesText">
          <ClassesMD v-show="activeTab === 'classes'" />
        </div>
      </div>

      <div v-if="activeTab === 'code'">
        <div ref="codeText">
          <CodeMD v-show="activeTab === 'code'" />
        </div>
      </div>
    </div>

    <!-- Documentation section -->
    <div v-if="documentation" class="grid grid-cols-6 gap-8 mt-10">
      <div class="rounded-lg py-6 col-span-4">
        <div v-for="(section, index) in documentation.content" :key="section.title" class="">
          <u-subtitle :class="[index >= 1 ? 'mt-6' : '']">
            {{ section.title }}
          </u-subtitle>

          <u-subtitle class="text-layoutHeavyContrast mt-4">
            {{ section.content }}
          </u-subtitle>
        </div>
      </div>
      <div class="flex flex-col px-6 py-6 rounded-lg col-span-2">
        <template v-if="documentation.packages">
          <template v-for="(pkg, index) in documentation.packages" :key="index">
            <div :class="[index >= 1 ? 'mt-2' : '', 'bg-layoutBackground px-4 py-2 rounded-lg font-medium']">
              <u-body class="text-layoutHeavyContrast">
                {{ pkg }}
              </u-body>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>
