

<script setup>
import { mdiAccount } from "@mdi/js"
import Footer from './components/footer.vue'

const navigation = [
  { name: 'Documentation', href: 'http://docs.unlocked.to', size: 'small', type: "text" },
  { name: 'Our mission', href: '#', size: 'small', type: "text", disabled: true },
  { name: 'Roadmap', href: 'https://github.com/orgs/UnlockedUI/projects/1', size: 'small', type: "text" },
  { name: 'Products', href: 'https://github.com/orgs/UnlockedUI', size: 'small', type: "text" },
  { name: 'Coming soon', href: '#', size: 'small', type: "default", disabled: true },
]

const dropdown = [
  { name: 'Component library', href: 'https://github.com/UnlockedUI/unlocked-ui', iconSrc: '/logo-icon.svg'},
  { name: 'Web3 components', href: '/web3', disabled: false, iconSrc: '/logo-icon.svg'},
  { name: 'Figma UI kit', href: '#', icon: mdiAccount, disabled: true, iconSrc: '/images/figma.svg'},
]
</script>

<template>
  <main>
     <!-- TODO: Fix mobile navigation  -->
    <AppBar title="Unlocked" :navigation="navigation" logo logoUrl="/logo-withoutText.svg" logoHref="/">
      <template #rightSide>
        <div v-for="item in navigation" :key="item.name">
          <Dropdown 
            v-if="item.name === 'Products'"
            text="Products"
            :items="dropdown"
          />
  
          <Button
            v-else
            external
            :href="item.href"
            target="_blank"
            :size="item.size"
            :type="item.type"
            :disabled="item.disabled"
          >
            {{ item.name }}
          </Button>
        </div>
      </template>
    </AppBar>
    <router-view />
    <Footer/>
  </main>
</template>

<style>
.iconify {
  width: 1em!important;
  height: 1em!important;
}
</style>
