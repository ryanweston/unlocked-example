<script lang="ts" setup>
import InfoRow from './info-row.vue'
import SectionHeader from '@/components/SectionHeader.vue'

const featuresRow = [
  { icon: '<span class="iconify" data-icon="charm:rocket"></span>', title: 'Next generation', content: 'We want to help enable the next generation of web. Our components should and will be fully compatible and supported with any current and future web3 advancements.' },
  { icon: '<span class="iconify" data-icon="akar-icons:book"></span>', title: 'Scalable design system', content: 'Thorough and readable documentation. We understand that bad documentation is the worst. All of our components and fully documented, with support for all levels of experience. ' },
  { icon: '<span class="iconify" data-icon="bx:paint"></span>', title: 'Customisation', content: 'Adding your own touch to a component library can be hard. Building out a design system is even harder. Unlocked is here to help you with both.' },
]

const communityRow = [
  { icon: '<span class="iconify" data-icon="akar-icons:github-fill"></span>', title: 'Open source', content: 'In the ethos of web3 and other great component libraries and design systems, Unlocked\'s mission is to be as collaborative and open source as we can possibly be.' },
  { icon: '<span class="iconify" data-icon="bx:hard-hat"></span>', title: 'Maintainable', content: 'A good developer experience when maintaining our component library is important for the future of Unlocked. Our processes will help to support this and ensure contributing is accessible.' },
  { icon: '<span class="iconify" data-icon="fluent:people-community-16-filled"></span>', title: 'Feedback driven', content: 'Ensuring we have open channels and a strong, collaborative community is important. Feel free to join us on Discord or follow us on Twitter for updates!' },
]
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:pb-16 lg:pt-0 lg:px-8">
    <SectionHeader
      title="Our features"
      subtitle="What does Unlocked offer?"
    />
    <div class="w-100 py-8">
      <div class="flex flex-row">
        <div class="border border-layoutBorder rounded-md bg-layoutContrast px-4 py-4 flex flex-col">
          <USubtitle class="mb-2">
            Open source
          </USubtitle>
          <UBody>
            Digital brilliance and open source magic. The best of both worlds.
          </UBody>
        </div>
        <div class="border border-layoutBorder rounded-md bg-layoutContrast px-4 py-4 ml-2 flex flex-col">
          <USubtitle class="mb-2">
            Open source
          </USubtitle>
          <UBody>
            Digital brilliance and open source magic. The best of both worlds.
          </UBody>
        </div>
      </div>
      <!-- <div class="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        <ul class="list-disc list-inside col-span-2">
          <li class="mb-2 text-text">
            Open source
          </li>
          <li class="mb-2 text-text">
            30+ UI components
          </li>
          <li class="mb-2 text-text">
            Storybook implementation
          </li>
          <li class="mb-2 text-text">
            Thorough documentation
          </li>
        </ul>

        <ul class="list-disc list-inside col-span-2">
          <li class="mb-2 text-text">
            Beginner friendly
          </li>
          <li class="mb-2 text-text">
            Web3 support
          </li>
          <li class="mb-2 text-text">
            Tree shakable
          </li>
          <li class="mb-2 text-text">
            Transparent processes
          </li>
        </ul>

        <ul class="list-disc list-inside col-span-2">
          <li class="mb-2 text-text">
            Design tokens
          </li>
          <li class="mb-2 text-text">
            Theme switching
          </li>
          <li class="mb-2 text-text">
            Utility class based
          </li>
          <li class="mb-2 text-text">
            Easily customisable
          </li>
        </ul>

        <ul class="list-disc list-inside col-span-2">
          <li class="mb-2 text-text">
            Continuous support
          </li>
          <li class="mb-2 text-text">
            Vue3 support
          </li>
          <li class="mb-2 text-text">
            Minimal package size
          </li>
          <li class="mb-2 text-text">
            Updated Figma UI kit
          </li>
        </ul>
      </div> -->
    </div>
  </div>

  <!-- <div class="mx-auto max-w-screen-lg px-4 py-12 sm:px-6 lg:py-24 lg:px-8">
    <div class="lg:flex w-full lg:items-center lg:justify-between">
      <h1 class="text-2xl lg:text-5xl px-6  font-bold">
        Unlocking your future design system
      </h1>
    </div>
  </div> -->

  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
    <SectionHeader
      title="Changing the future of component libraries"
      subtitle="Why should we use Unlocked?"
    />
    <div class="flex w-100 items-center justify-between mx-auto lg:py-16">
      <InfoRow :items="featuresRow" />
    </div>
  </div>

  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:pb-16 lg:pt-0 lg:px-8">
    <SectionHeader
      title="Our components"
      subtitle="Component variety"
    />
    <div class="w-100 py-8">
      <div class="flex flex-row">
        <div class="border border-layoutBorder rounded-md bg-layoutContrast px-4 py-4 flex flex-col">
          <USubtitle class="mb-2">
            Open source
          </USubtitle>
          <UBody>
            Digital brilliance and open source magic. The best of both worlds.
          </UBody>
        </div>
        <div class="border border-layoutBorder rounded-md bg-layoutContrast px-4 py-4 ml-2 flex flex-col">
          <USubtitle class="mb-2">
            Open source
          </USubtitle>
          <UBody>
            Digital brilliance and open source magic. The best of both worlds.
          </UBody>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
    <SectionHeader
      title="Built for the community, by the community"
      subtitle="Why use unlocked?"
    />
    <div class="flex w-100 items-center justify-between mx-auto lg:py-16">
      <InfoRow :items="communityRow" />
    </div>
  </div>
</template>
