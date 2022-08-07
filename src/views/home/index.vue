<script lang="ts" setup>
import { mdiArrowRight, mdiBookshelf, mdiBrush, mdiHandCoin, mdiLanguageTypescript, mdiPuzzle, mdiTailwind } from '@mdi/js'
// @ts-expect-error package has no types
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import InfoRow from '@/views/home/components/InfoRow.vue'
import SectionHeader from '@/views/home/components/SectionHeader.vue'

const featuresRow = [
  { icon: '<span class="iconify" data-icon="bx:paint"></span>', title: 'Developer control', content: 'Our philosophy is to ensure as much control can be transferred into developer\'s hands as possible. All while maintaining the benefits of using a component library.' },
  { icon: '<span class="iconify" data-icon="akar-icons:book"></span>', title: 'Design systems', content: 'Built with design processes in mind. We maintain a Figma UI kit that exposes the customisable design tokens that we utilise for Unlocked.' },
  { icon: '<span class="iconify" data-icon="charm:rocket"></span>', title: 'Customisation', content: 'Theming system that allows you to invert complete control to yourself. This goes hand in hand with us exposing compositional components for you to use!' },
]

const components = [
  { img: '/images/components/button.png', href: 'https://www.storybook.unlocked.to/?path=/story/components-button--primary' },
  { img: '/images/components/typography.png', href: 'https://www.storybook.unlocked.to/?path=/story/components-headline--one' },
  { img: '/images/components/tooltip.png', href: 'https://www.storybook.unlocked.to/?path=/story/components-tooltip--default' },
  { img: '/images/components/link.png', href: 'https://www.storybook.unlocked.to/?path=/story/components-link--default' },
]

const settings = {
  itemsToShow: 1.1,
}

// Breakpoints correspond to Tailwind
const breakpoints = {
  // sm
  640: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  // md
  768: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },
  // lg
  1024: {
    itemsToShow: 3.5,
    snapAlign: 'start',
  },
}
</script>

<template>
  <div>
    <header class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-36 lg:px-none">
      <div class="lg:flex lg:items-center lg:justify-between text-center">
        <u-headline class="text-4xl sm:text-6xl md:text-6xl">
          Build for the future & unlock your designs.
        </u-headline>
      </div>

      <div class="flex flex-col md:flex-row w-full md:items-center justify-center mx-auto py-16">
        <div class="flex flex-row justify-center md:justify-start items-center">
          <span class="iconify mr-3" data-icon="logos:figma" />
          <u-body class="flex mr-8">
            Maintained Figma UI kit
          </u-body>
        </div>
        <div class="flex flex-row justify-center md:justify-start items-center mt-3 md:mt-0">
          <span class="iconify mr-3" data-icon="logos:storybook-icon" />
          <u-body class="flex mr-8">
            Storybook & local documentation
          </u-body>
        </div>
        <div class="flex flex-row justify-center md:justify-start items-center mt-3 md:mt-0">
          <span class="iconify mr-3" data-icon="logos:vue" />
          <u-body class="flex mr-8">
            Built with Vue3
          </u-body>
        </div>
      </div>

      <div class="flex w-100 flex-col sm:flex-row md:items-center md:justify-center mx-auto">
        <u-button
          size="large"
          type="secondary"
          href="https://github.com/UnlockedUI/unlocked-ui"
          target="_blank"
        >
          <template #prefixIcon>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" clip-rule="evenodd" /></svg>
          </template>
          Visit GitHub
        </u-button>
        <u-button size="large" class="mt-2 sm:ml-4 sm:mt-0">
          Start using Unlocked
          <template #appendIcon>
            <u-icon>
              {{ mdiArrowRight }}
            </u-icon>
          </template>
        </u-button>
      </div>
    </header>

    <!-- Body content  -->
    <section class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:pb-16 lg:pt-0 lg:px-8">
      <SectionHeader
        title="Our features"
        subtitle="What does Unlocked offer?"
      />
      <div class="w-100 py-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div class="rounded-md bg-interfaceOne px-6 py-6 flex flex-col">
            <u-subtitle class="mb-2">
              <u-icon class="inline mr-1">
                {{ mdiTailwind }}
              </u-icon>
              Tailwind
            </u-subtitle>
            <u-body class="text-textTwo">
              Styled with Tailwind with no extra bundled CSS to bloat your codebase.
            </u-body>
          </div>
          <div class="rounded-md bg-interfaceOne px-6 py-6 flex flex-col">
            <div class="flex flex-row">
              <u-subtitle class="mb-2">
                <u-icon class="inline mr-1">
                  {{ mdiLanguageTypescript }}
                </u-icon>
                Typescript
              </u-subtitle>
            </div>
            <u-body class="text-textTwo">
              Fully type-safe components that will be picked up by your IDE.
            </u-body>
          </div>
          <div class="rounded-md bg-interfaceOne px-6 py-6 flex flex-col">
            <u-subtitle class="mb-2">
              <u-icon class="inline mr-1">
                {{ mdiBookshelf }}
              </u-icon>
              Storybook support
            </u-subtitle>
            <u-body class="text-textTwo">
              Easily transition Unlocked components into your own Storybook.
            </u-body>
          </div>
          <div class="rounded-md bg-interfaceOne px-6 py-6 flex flex-col">
            <u-subtitle class="mb-2">
              <u-icon class="inline mr-1">
                {{ mdiHandCoin }}
              </u-icon>
              Design tokens
            </u-subtitle>
            <u-body class="text-textTwo">
              Explicitly named design tokens that make theming a piece of cake.
            </u-body>
          </div>
          <div class="rounded-md bg-interfaceOne px-6 py-6 flex flex-col">
            <u-subtitle class="mb-2">
              <u-icon class="inline mr-1">
                {{ mdiPuzzle }}
              </u-icon>
              Compositions
            </u-subtitle>
            <u-body class="text-textTwo">
              Copy and paste components built with Unlocked to save your project bloat.
            </u-body>
          </div>
          <div class="rounded-md bg-interfaceOne px-6 py-6 flex flex-col">
            <u-subtitle class="mb-2">
              <u-icon class="inline mr-1">
                {{ mdiBrush }}
              </u-icon>
              Theme overrides
            </u-subtitle>
            <u-body class="text-textTwo">
              Theme override file that allows you to cleanly customise every component.
            </u-body>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:pb-16 lg:pt-0 lg:px-8">
      <SectionHeader
        title="Base components"
        subtitle="Atomic base components"
      />
      <div class="w-100 py-8">
        <carousel :settings="settings" :breakpoints="breakpoints" class="mt-6">
          <slide v-for="slide in components" :key="slide">
            <div class="w-full pr-6">
              <a :href="slide.href" class="slider_img_wrapper">
                <img class="slider_img" :src="slide.img">
              </a>
            </div>
          </slide>

          <template #addons>
            <navigation />
          </template>
        </carousel>
        <div class="flex flex-row justify-end mt-8">
          <u-button type="text" href="https://storybook.unlocked.to" target="_blank">
            View Storybook
            <template #appendIcon>
              <u-icon>
                {{ mdiArrowRight }}
              </u-icon>
            </template>
          </u-button>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-screen-xl px-4 pb-12 sm:px-6 lg:pb-16 lg:px-8">
      <SectionHeader
        title="Changing the future of component libraries"
        subtitle="Why should we use Unlocked?"
      />
      <div class="flex w-100 items-center justify-between mx-auto lg:py-16">
        <InfoRow :items="featuresRow" />
      </div>
    </section>
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
