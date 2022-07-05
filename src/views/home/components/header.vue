<template>
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-36 lg:px-none">
    <div class="lg:flex lg:items-center lg:justify-between text-center">
      <u-headline>Build for the future & unlock your designs.</u-headline>
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
        external
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
      </u-button>
    </div>
  </div>
</template>
