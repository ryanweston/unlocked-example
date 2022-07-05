<script lang="ts" setup>
import Footer from './components/footer.vue'

const dropdown = [
  { text: 'Component library', href: 'https://github.com/UnlockedUI/unlocked-ui', iconSrc: '/logo-icon.svg' },
  { text: 'Web3 components', href: '/web3', disabled: false, iconSrc: '/logo-icon-web3.svg' },
  { text: 'Figma UI kit', href: 'https://www.figma.com/file/3RLpJ0ZEXlbIBYLTUtLaL9/Unlocked?node-id=0%3A1', disabled: false, iconSrc: '/images/figma.svg' },
]

const navigation = [
  { text: 'Documentation', href: 'http://docs.unlocked.to', size: 'small', type: 'text', external: true },
  { text: 'Our mission', external: true, href: '/mission', size: 'small', type: 'text' },
  { text: 'Roadmap', external: true, href: 'https://github.com/orgs/UnlockedUI/projects/1', size: 'small', type: 'text' },
  { text: 'Products', href: 'https://github.com/orgs/UnlockedUI', size: 'small', type: 'text', items: dropdown },
  { text: 'Install Unlocked', href: '#', size: 'small', type: 'default', disabled: true, external: true },
]
</script>

<template>
  <main class="bg-background">
    <div class="relative min-h-screen">
      <!-- TODO: Fix mobile navigation  -->
      <u-menu class="border-none" title="Unlocked" :navigation="navigation" logo="/logo-dark.svg" logo-href="/">
        <template #rightSide>
          <div v-for="item in navigation" :key="item.text">
            <u-dropdown
              v-if="item.text === 'Products'"
              text="Products"
              :items="dropdown"
            />

            <u-button
              v-else
              :external="item.external"
              :href="item.href"
              :target="item.external ? '_blank' : ''"
              :size="item.size"
              :type="item.type"
            >
              {{ item.text }}
            </u-button>
          </div>
        </template>
      </u-menu>
      <router-view />
      <Footer />
    </div>
  </main>
</template>

<style>
.iconify {
  width: 1em!important;
  height: 1em!important;
}
</style>
