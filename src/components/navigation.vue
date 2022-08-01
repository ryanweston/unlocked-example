<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { UButton, UHeadline, withTheme } from '@unlocked/base'
import type { ButtonProps } from '@unlocked/base'

export interface MenuProps {
  items?: Array<ButtonProps>
  logo?: string
  logoHref?: string
  brand?: string
}

const props = defineProps<MenuProps>()

const styles = withTheme('navigation')
const classes = styles
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
                <UHeadline :size="4" :class="classes.logo.text">
                  {{ brand }}
                </UHeadline>
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
                :disabled="item.disabled"
                :href="item.href"
                :size="item.size"
                :type="item.type"
                :target="item.target"
                :text="item.text"
              />
            </slot>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile dropdown -->
    <!-- TODO: Add slots -->
    <DisclosurePanel :class="classes.mobileWrapper">
      <div :class="classes.mobileContainer">
        <slot name="mobileMenu">
          <UButton
            v-for="item in items"
            :key="item.text"
            :disabled="item.disabled"
            :href="item.href"
            :size="item.size"
            :type="item.type"
            :target="item.target"
            :text="item.text"
          />
        </slot>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
