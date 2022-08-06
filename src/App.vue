<script lang="ts" setup>
import { useRouter } from 'vue-router'
import type { ButtonProps } from '@unlocked/base'
import Footer from '@/components/Footer.vue'
import Navigation from '@/components/Navigation.vue'
import Dropdown from '@/components/Dropdown.vue'

const router = useRouter()

interface INavigationItem extends ButtonProps {
  route?: string
}

// Items for navigation links
const navigationItems: Array<INavigationItem> = [
  { text: 'Documentation', href: 'http://docs.unlocked.to', size: 'small', type: 'text', target: '_blank' },
  { text: 'Our mission', href: '/mission', route: '/mission', size: 'small', type: 'text' },
  { text: 'Compositions', href: '/compositions', route: '/compositions', size: 'small', type: 'text' },
  { text: 'Products', size: 'small', type: 'text' },
  { text: 'Install Unlocked', href: '#', size: 'small', type: 'primary', target: '_blank' },
]

// Items for products navigation dropdown
const dropdownItems = [
  { text: 'Component library', href: 'https://github.com/UnlockedUI/unlocked-ui', iconSrc: '/images/logo/logo-icon-dark.svg', target: '_blank' },
  { text: 'Figma kit', href: 'https://www.figma.com/community/file/1137715259744680631', disabled: false, iconSrc: '/images/figma.svg', target: '_blank' },
]

const visit = (href: string | undefined, route: string | undefined) => {
  if (!href && route)
    router.push(route)
}
</script>

<template>
  <main class="bg-interfacePage overflow-hidden">
    <div class="relative min-h-screen">
      <Navigation class="border-none" :items="navigationItems" logo="/images/logo/logo-dark.svg" logo-href="/">
        <template #rightSide>
          <div v-for="item in navigationItems" :key="item.text">
            <Dropdown
              v-if="item.text === 'Products'"
              text="Products"
              :items="dropdownItems"
            />

            <u-button
              v-else
              :href="item.href"
              :size="item.size"
              :type="item.type"
              :target="item.target ? '_blank' : ''"
              @click="() => visit(item.href, item.route)"
            >
              {{ item.text }}
            </u-button>
          </div>
        </template>
      </Navigation>
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
