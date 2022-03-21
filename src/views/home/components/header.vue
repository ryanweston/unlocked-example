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
      <div class="flex flex-row items-center">
        <span class="iconify mr-3" data-icon="logos:figma"></span>
        <p class="flex mr-8">Maintained Figma UI kit</p>
      </div>
      <div class="flex flex-row items-center">
        <span class="iconify mr-3" data-icon="logos:storybook-icon"></span>
        <p class="flex mr-8">Storybook & local documentation</p>
      </div>
      <div class="flex flex-row items-center">
        <span class="iconify mr-3" data-icon="logos:vue"></span>
        <p class="flex mr-8">Built with Vue3</p>
      </div>
    </div>

    <div class="flex w-100 flex-row items-center justify-center mx-auto">
      <Button prefixIcon type="secondary">
        <template #prefix-icon>
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" clip-rule="evenodd"/></svg>
        </template>
        Visit GitHub 
      </Button>
      <Button class="ml-2">Coming soon!</Button>
    </div>
  </div>

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
    
    <SectionHeader 
      title="Built for the community, by the community" 
      subtitle="Why use unlocked"
    />
    <div class="flex w-100 items-center justify-between mx-auto lg:py-16">
      <div class="flex-column">
        <h3 class="font-bold text-lg">Open source</h3>
        <p>What makes us different? We build our components out in a scalable way. Ensuring we follow best pracices throughout the whole process. Let’s keep it moving.</p>
      </div>
       <div class="flex-column ml-10">
        <h3 class="font-bold text-lg">Maintainable</h3>
        <p>What makes us different? We build our components out in a scalable way. Ensuring we follow best pracices throughout the whole process. Let’s keep it moving.</p>
      </div>
       <div class="flex-column ml-10">
        <h3 class="font-bold text-lg">Feedback driven</h3>
        <p>What makes us different? We build our components out in a scalable way. Ensuring we follow best pracices throughout the whole process. Let’s keep it moving.</p>
      </div>
    </div>
  </div>

</template>