<script lang="ts" setup>
import { mdiAccount } from '@mdi/js'
import Footer from './components/footer.vue'

const navigation = [
  { name: 'Documentation', href: 'http://docs.unlocked.to', size: 'small', type: 'text', external: true },
  { name: 'Our mission', href: '/mission', size: 'small', type: 'text' },
  { name: 'Roadmap', href: 'https://github.com/orgs/UnlockedUI/projects/1', size: 'small', type: 'text' },
  { name: 'Products', href: 'https://github.com/orgs/UnlockedUI', size: 'small', type: 'text' },
  { name: 'Install Unlocked', href: '#', size: 'small', type: 'default', disabled: true, external: true },
]

const dropdown = [
  { name: 'Component library', href: 'https://github.com/UnlockedUI/unlocked-ui', iconSrc: '/logo-icon.svg' },
  { name: 'Web3 components', href: '/web3', disabled: false, iconSrc: '/logo-icon-web3.svg' },
  { name: 'Figma UI kit', href: '#', icon: mdiAccount, disabled: true, iconSrc: '/images/figma.svg' },
]
</script>

<template>
  <main>
    <div class="relative min-h-screen">
      <!-- TODO: Fix mobile navigation  -->
      <AppBar title="Unlocked" :navigation="navigation" logo logo-url="/logo-withoutText.svg" logo-href="/">
        <template #rightSide>
          <div v-for="item in navigation" :key="item.name">
            <Dropdown
              v-if="item.name === 'Products'"
              text="Products"
              :items="dropdown"
            />
            <!-- TODO: Move this logic into the package component -->
            <Button
              v-else
              :external="item.external"
              :href="item.href"
              :target="item.external ? '_blank' : ''"
              :size="item.size"
              :type="item.type"
            >
              {{ item.name }}
            </Button>
          </div>
        </template>
      </AppBar>
      <router-link to="/mission">
        CLICK ME
      </router-link>
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
