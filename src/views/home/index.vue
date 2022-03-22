<script setup>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Body from './components/body.vue'

const navigation = [
  { name: 'Documentation', href: 'http://docs.unlocked.to', current: false },
  { name: 'Our mission', href: '#', current: false },
  { name: 'Roadmap', href: 'https://github.com/orgs/UnlockedUI/projects/1', current: false },
  { name: 'Products', href: 'https://github.com/orgs/UnlockedUI', current: false },
  { name: 'Coming soon', href: '#', current: true },
]
</script>

<template>
  <div>
    <!-- Fix exported component name -->
    <AppBar title="Unlocked" logo logoUrl="/logo-withText.svg" :navigation="navigation"/>
    <Header/>
    <Body/>
    <Footer/>
  </div>
</template>
