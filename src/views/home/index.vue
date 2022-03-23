<script setup>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Body from './components/body.vue'

const navigation = [
  { name: 'Documentation', href: 'http://docs.unlocked.to', size: 'small', type: "text" },
  { name: 'Our mission', href: '#', size: 'small', type: "text", disabled: true },
  { name: 'Roadmap', href: 'https://github.com/orgs/UnlockedUI/projects/1', size: 'small', type: "text" },
  { name: 'Products', href: 'https://github.com/orgs/UnlockedUI', size: 'small', type: "text" },
  { name: 'Coming soon', href: '#', size: 'small', type: "default", disabled: true },
]

const dropdown = [
  { name: 'Component library', href: 'https://github.com/UnlockedUI/unlocked-ui', icon: '<img class="mr-3" src="/logo-icon.svg" />'},
  { name: 'Web3 components', href: '#', icon: '<img class="mr-3" src="/logo-icon.svg" />'},
  { name: 'Figma UI kit', href: '#', icon: '<span class="iconify mr-3" data-icon="logos:figma">'},
]
</script>

<template>
  <div>
    <AppBar title="Unlocked" logo logoUrl="/logo-withoutText.svg" logoHref="#">
      <template #rightSide>
        <div v-for="item in navigation" :key="item.name">
          <Dropdown 
            v-if="item.name === 'Products'"
            :menuItems="dropdown"
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
    <Header/>
    <Body/>
    <Footer/>
  </div>
</template>

<style>
.iconify {
  width: 1em!important;
  height: 1em!important;
}
</style>
