<script>
import SectionHeader from '@/components/SectionHeader.vue'

export default {
  components: { 
    SectionHeader
  }
}
</script>

<template>
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-28 lg:px-8">
    <div class="lg:flex lg:items-center lg:justify-between text-center">
      <Headline>The modern, forward thinking, component library solution.</Headline>
    </div>

    <div class="flex w-full items-center justify-center mx-auto py-16">
      <p class="flex mr-8"><span class="iconify mr-3" data-icon="logos:figma"></span>Updated Figma UI kit</p>
      <p class="flex mr-8"><span class="iconify mr-3" data-icon="logos:storybook-icon"></span>Storybook and local documentation</p>
      <p class="flex mr-8"><span class="iconify mr-3" data-icon="logos:vue"></span>Vue3 component library</p>
    </div>

    <div class="flex w-100 items-center justify-center mx-auto">
      <Button>Start using Unlocked</Button>
    </div>
  </div>

  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:pb-16 lg:pt-0 lg:px-8">
    <SectionHeader />
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

  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-24 lg:px-8">
    <div class="lg:flex lg:items-center lg:justify-between">
      <h1 class="text-5xl px-24">
        We understand the trade offs that using an open source design system comes with. We can work with you here.
      </h1>
    </div>
  </div>

   <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
    <div class="flex w-100 items-center justify-between mx-auto">
      <div class="flex-column">
        <h3 class="font-bold text-lg">Incremental</h3>
        <p>What makes us different? We build our components out in a scalable way. Ensuring we follow best pracices throughout the whole process. Let’s keep it moving.</p>
      </div>
       <div class="flex-column ml-10">
        <h3 class="font-bold text-lg">Documentation</h3>
        <p>What makes us different? We build our components out in a scalable way. Ensuring we follow best pracices throughout the whole process. Let’s keep it moving.</p>
      </div>
       <div class="flex-column ml-10">
        <h3 class="font-bold text-lg">Customisation</h3>
        <p>What makes us different? We build our components out in a scalable way. Ensuring we follow best pracices throughout the whole process. Let’s keep it moving.</p>
      </div>
    </div>
  </div>

  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
    <div class="lg:flex lg:items-center lg:justify-between">
    </div>
      <SectionHeader />
  </div>

</template>