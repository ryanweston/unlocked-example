<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { UButton, withTheme } from '@unlocked/foundation'

// Use Button types here to avoid repitition
export interface INavigationItems {
  text: string
  href?: string
  size?: string
  type?: string
  iconSrc?: string
  disabled?: boolean
  external?: boolean
}

export interface INavigationProps {
  items?: Array<INavigationItems>
  title?: string
  logo?: string
  logoHref?: string
}

const props = defineProps<INavigationProps>()

const styles = withTheme('menu')
const classes = styles
</script>

<script lang="ts">
export default { name: 'UMenu' }
</script>

<template>
  <Disclosure
    v-slot="{ open }"
    as="nav"
    :class="classes.wrapper"
  >
    <div :class="classes.screenWrapper">
      <div :class="classes.screenContainer">
        <!-- Mobile menu button-->
        <slot name="mobileMenuButton">
          <div :class="classes.menuButton.container">
            <DisclosureButton :class="classes.menuButton.button">
              <span class="sr-only">Open menu</span>
              <MenuIcon
                v-if="!open"
                :class="classes.menuButton.icon"
                aria-hidden="true"
              />
              <XIcon
                v-else
                :class="classes.menuButton.icon"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>
        </slot>

        <!-- Left side -->
        <div :class="classes.logo.wrapper">
          <div :class="classes.logo.container">
            <slot name="leftSide">
              <template v-if="logo">
                <a :href="props.logoHref">
                  <img :class="classes.logo.image" :src="props.logo" alt="Workflow">
                </a>
                <a :href="props.logoHref">
                  <img :class="classes.logo.mobileImage" :src="props.logo" alt="Workflow">
                </a>
              </template>
              <a v-else :href="props.logoHref">
                <h3 :class="classes.logo.text">
                  Unlocked
                </h3>
              </a>
            </slot>
          </div>
        </div>

        <!-- Right side -->
        <div :class="classes.screenMenuWrapper">
          <div :class="classes.screenMenuContainer">
            <slot name="rightSide">
              <UButton
                v-for="item in items"
                :key="item.text"
                :size="item.size"
                :type="item.type"
              >
                {{ item.text }}
              </UButton>
            </slot>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile dropdown -->
    <DisclosurePanel :class="classes.mobileWrapper">
      <div :class="classes.mobileContainer">
        <slot name="mobileMenu">
          <UButton
            v-for="item in items"
            :key="item.text"
            :size="item.size"
            :type="item.type"
          >
            {{ item.text }}
          </UButton>
        </slot>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
