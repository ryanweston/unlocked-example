<script lang="ts" setup>
import { useRouter } from 'vue-router'
import type { ButtonProps } from '@unlocked/base'
// import dropdown from '@/components/dropdown/dropdown.vue'
import Footer from '@/components/footer.vue'
import { navigation } from '@/components/navigation'

const router = useRouter()

// const dropdownItems = [
//   { text: 'Component library', href: 'https://github.com/UnlockedUI/unlocked-ui', iconSrc: '/images/logo/logo-icon-dark.svg', target: '_blank' },
//   { text: 'Figma kit', href: 'https://www.figma.com/file/3RLpJ0ZEXlbIBYLTUtLaL9/Unlocked?node-id=0%3A1', disabled: false, iconSrc: '/images/figma.svg', target: '_blank' },
// ]

interface INavigationItem extends ButtonProps {
  route?: string
  items?: Array<ButtonProps>
}

const navigationItems: Array<INavigationItem> = [
  { text: 'Documentation', href: 'http://docs.unlocked.to', size: 'small', type: 'text', target: '_blank' },
  { text: 'Our mission', href: '/mission', route: '/mission', size: 'small', type: 'text' },
  { text: 'Compositions', href: '/compositions', route: '/compositions', size: 'small', type: 'text' },
  { text: 'Products', size: 'small', type: 'text' },
  { text: 'Install Unlocked', href: '#', size: 'small', type: 'primary', target: '_blank' },
]
const visit = (href: string | undefined, route: string | undefined) => {
  if (!href && route)
    router.push(route)
}
</script>

<template>
  <main class="bg-interfacePage overflow-hidden">
    <div class="relative min-h-screen">
      <navigation class="border-none" :items="navigationItems" logo="/images/logo/logo-dark.svg" logo-href="/">
        <template #rightSide>
          <div v-for="item in navigationItems" :key="item.text">
            <!-- <Dropdown
              v-if="item.text === 'Products'"
              text="Products"
              :items="dropdownItems"
            /> -->

            <u-button
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
      </navigation>
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
