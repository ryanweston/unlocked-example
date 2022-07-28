<script lang="ts" setup>
import { useRouter } from 'vue-router'
import Footer from './components/footer.vue'

const router = useRouter()

const dropdown = [
  { text: 'Component library', href: 'https://github.com/UnlockedUI/unlocked-ui', iconSrc: '/images/logo/logo-icon-dark.svg' },
  { text: 'Figma kit', href: 'https://www.figma.com/file/3RLpJ0ZEXlbIBYLTUtLaL9/Unlocked?node-id=0%3A1', disabled: false, iconSrc: '/images/figma.svg' },
]

const navigation = [
  { text: 'Documentation', href: 'http://docs.unlocked.to', size: 'small', type: 'text', external: true },
  { text: 'Our mission', route: '/mission', size: 'small', type: 'text' },
  { text: 'Compositions', route: '/compositions', size: 'small', type: 'text' },
  { text: 'Products', href: 'https://github.com/orgs/UnlockedUI', size: 'small', type: 'text', items: dropdown },
  { text: 'Install Unlocked', href: '#', size: 'small', type: 'default', disabled: true, external: true },
]
const visit = (href: string | undefined, route: string | undefined) => {
  if (!href && route)
    router.push(route)
}
</script>

<template>
  <main class="bg-background">
    <div class="relative min-h-screen">
      <u-menu class="border-none" title="Unlocked" :navigation="navigation" logo="/images/logo/logo-dark.svg" logo-href="/">
        <template #rightSide>
          <div v-for="item in navigation" :key="item.text">
            <u-dropdown
              v-if="item.text === 'Products'"
              text="Products"
              :items="dropdown"
            />

            <u-button
              v-else
              :href="item.href"
              :size="item.size"
              :type="item.type"
              :target="item.external ? '_blank' : ''"
              @click="() => visit(item.href, item.route)"
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
