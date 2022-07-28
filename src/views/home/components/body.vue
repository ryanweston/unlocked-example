<script lang="ts" setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { mdiArrowRight, mdiBookshelf, mdiBrush, mdiHandCoin, mdiLanguageTypescript, mdiPuzzle, mdiTailwind } from '@mdi/js'
import 'vue3-carousel/dist/carousel.css'
import InfoRow from './info-row.vue'
import SectionHeader from '@/components/SectionHeader.vue'

const featuresRow = [
  { icon: '<span class="iconify" data-icon="charm:rocket"></span>', title: 'Next generation', content: 'We want to help enable the next generation of web. Our components should and will be fully compatible and supported with any current and future web3 advancements.' },
  { icon: '<span class="iconify" data-icon="akar-icons:book"></span>', title: 'Scalable design system', content: 'Thorough and readable documentation. We understand that bad documentation is the worst. All of our components and fully documented, with support for all levels of experience. ' },
  { icon: '<span class="iconify" data-icon="bx:paint"></span>', title: 'Customisation', content: 'Adding your own touch to a component library can be hard. Building out a design system is even harder. Unlocked is here to help you with both.' },
]
const components = [
  { img: '/images/components/button.png' },
  { img: '/images/components/typography.png' },
  { img: '/images/components/dropdown.png' },
  { img: '/images/components/button.png' },
]

const settings = {
  itemsToShow: 3,
}
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:pb-16 lg:pt-0 lg:px-8">
    <SectionHeader
      title="Our features"
      subtitle="What does Unlocked offer?"
    />
    <div class="w-100 py-8">
      <div class="grid grid-cols-3 gap-6">
        <div class="rounded-md bg-layoutBackground px-6 py-6 flex flex-col">
          <u-subtitle class="mb-2">
            <u-icon class="inline mr-1">
              {{ mdiTailwind }}
            </u-icon>
            Tailwind
          </u-subtitle>
          <u-body class="text-layoutHeavyContrast">
            Styled with Tailwind with no extra bundled CSS to bloat your codebase.
          </u-body>
        </div>
        <div class="rounded-md bg-layoutBackground px-6 py-6 flex flex-col">
          <div class="flex flex-row">
            <u-subtitle class="mb-2">
              <u-icon class="inline mr-1">
                {{ mdiLanguageTypescript }}
              </u-icon>
              Typescript
            </u-subtitle>
          </div>
          <u-body class="text-layoutHeavyContrast">
            Fully type-safe components that will be picked up by your IDE.
          </u-body>
        </div>
        <div class="rounded-md bg-layoutBackground px-6 py-6 flex flex-col">
          <u-subtitle class="mb-2">
            <u-icon class="inline mr-1">
              {{ mdiBookshelf }}
            </u-icon>
            Storybook support
          </u-subtitle>
          <u-body class="text-layoutHeavyContrast">
            Easily transition Unlocked components into your own Storybook.
          </u-body>
        </div>
        <div class="rounded-md bg-layoutBackground px-6 py-6 flex flex-col">
          <u-subtitle class="mb-2">
            <u-icon class="inline mr-1">
              {{ mdiHandCoin }}
            </u-icon>
            Design tokens
          </u-subtitle>
          <u-body class="text-layoutHeavyContrast">
            Explicitly named design tokens that make theming a piece of cake.
          </u-body>
        </div>
        <div class="rounded-md bg-layoutBackground px-6 py-6 flex flex-col">
          <u-subtitle class="mb-2">
            <u-icon class="inline mr-1">
              {{ mdiPuzzle }}
            </u-icon>
            Compositions
          </u-subtitle>
          <u-body class="text-layoutHeavyContrast">
            Copy and paste components built with Unlocked to save your project bloat.
          </u-body>
        </div>
        <div class="rounded-md bg-layoutBackground px-6 py-6 flex flex-col">
          <u-subtitle class="mb-2">
            <u-icon class="inline mr-1">
              {{ mdiBrush }}
            </u-icon>
            Theme overrides
          </u-subtitle>
          <u-body class="text-layoutHeavyContrast">
            Theme override file that allows you to cleanly customise every component.
          </u-body>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:pb-16 lg:pt-0 lg:px-8">
    <SectionHeader
      title="Our components"
      subtitle="Component variety"
    />
    <div class="w-100 py-8">
      <carousel :settings="settings" :items-to-show="1.5" class="mt-6">
        <slide v-for="slide in components" :key="slide">
          <div class="w-full pr-6">
            <img class="slider_img" :src="slide.img">
          </div>
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
      <div class="flex flex-row justify-end mt-8">
        <u-button type="text" class="hover:bg-gray-900 hover:text-white">
          View Storybook
          <template #appendIcon>
            <u-icon>
              {{ mdiArrowRight }}
            </u-icon>
          </template>
        </u-button>
      </div>
    </div>
  </div>

  <div class="mx-auto max-w-screen-xl px-4 pb-12 sm:px-6 lg:pb-16 lg:px-8">
    <SectionHeader
      title="Changing the future of component libraries"
      subtitle="Why should we use Unlocked?"
    />
    <div class="flex w-100 items-center justify-between mx-auto lg:py-16">
      <InfoRow :items="featuresRow" />
    </div>
  </div>
</template>

<style lang="postcss">
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none!important;
}

.carousel__prev, .carousel__next {
  background-color: white;
  border-radius: var(--vc-nav-width);
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: calc(var(--vc-nav-width) * 2 / 3);
  padding: 0;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 0;
  cursor: pointer;
}

.carousel__prev:hover, .carousel__next:hover {
  @apply opacity-50
}
</style>
