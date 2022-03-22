<script setup>
import InfoRow from './info-row.vue'
import SectionHeader from '@/components/SectionHeader.vue'

const featuresRow = [
  { icon: '<span class="iconify" data-icon="bi:bricks"></span>', title: 'Incremental', content: 'What makes us different? We build our components out in a scalable way. Ensuring we follow best pracices throughout the whole process. Let’s keep it moving.'},
  { icon: '<span class="iconify" data-icon="akar-icons:book"></span>', title: 'Documentation', content: 'What makes us different? We build our components out in a scalable way. Ensuring we follow best pracices throughout the whole process. Let’s keep it moving.'},
  { icon: '<span class="iconify" data-icon="bx:paint"></span>', title: 'Customisation', content: 'What makes us different? We build our components out in a scalable way. Ensuring we follow best pracices throughout the whole process. Let’s keep it moving.'},
]

const communityRow = [
  { icon: '<span class="iconify" data-icon="akar-icons:github-fill"></span>', title: 'Open source', content: 'What makes us different? We build our components out in a scalable way. Ensuring we follow best pracices throughout the whole process. Let’s keep it moving.'},
  { icon: '<span class="iconify" data-icon="bx:hard-hat"></span>', title: 'Maintainable', content: 'What makes us different? We build our components out in a scalable way. Ensuring we follow best pracices throughout the whole process. Let’s keep it moving.'},
  { icon: '<span class="iconify" data-icon="fluent:people-community-16-filled"></span>', title: 'Feedback driven', content: 'What makes us different? We build our components out in a scalable way. Ensuring we follow best pracices throughout the whole process. Let’s keep it moving.'},
]
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:pb-16 lg:pt-0 lg:px-8">
    <SectionHeader 
      title="Our features" 
      subtitle="Why use unlocked"
    />
     <div class="w-100 py-8">
       <div class="w-full grid grid-cols-8 gap-4">
        <ul class="list-disc list-inside col-span-2">
          <li class="mb-2">
            Open source
          </li>
           <li class="mb-2">
            300+ UI components
          </li>
           <li class="mb-2">
            Storybook implementation
          </li>
           <li class="mb-2">
            Thorough documentation
          </li>
        </ul>

        <ul class="list-disc list-inside col-span-2">
           <li class="mb-2">
            Beginner friendly
          </li>
           <li class="mb-2">
            Web3 support
          </li>
           <li class="mb-2">
            Tree shakable
          </li>
           <li class="mb-2">
            Easily customisable
          </li>
        </ul>

        <ul class="list-disc list-inside col-span-2">
           <li class="mb-2">
            Well supported
          </li>
           <li class="mb-2">
            Transparent processes
          </li>
           <li class="mb-2">
            Minimal package size
          </li>
           <li class="mb-2">
            Updated Figma UI kit
          </li>
        </ul>

         <ul class="list-disc list-inside col-span-2">
            <li class="mb-2">
            Open source
          </li>
           <li class="mb-2">
            300+ UI components
          </li>
           <li class="mb-2">
            Storybook implementation
          </li>
           <li class="mb-2">
            Thorough documentation
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="mx-auto max-w-screen-lg px-4 py-12 sm:px-6 lg:py-24 lg:px-8">
    <div class="lg:flex lg:items-center lg:justify-between text-center">
      <h1 class="text-5xl px-24 leading-tight">
        We understand the trade offs that using an open source design system comes with. We can work with you here.
      </h1>
    </div>
  </div>

  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
    <InfoRow :items="featuresRow"/>
  </div>

  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
    <SectionHeader 
      title="Built for the community, by the community" 
      subtitle="Why use unlocked"
    />
    <div class="flex w-100 items-center justify-between mx-auto lg:py-16">
      <InfoRow :items="communityRow"/>
    </div>
  </div>
</template>