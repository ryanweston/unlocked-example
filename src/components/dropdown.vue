<script lang="ts" setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { withTheme } from '@unlocked/base'

export interface Item {
  text?: string
  active?: boolean
  class?: string | string[]
  disabled?: boolean
  type?: string
  href?: string
  target?: string
  iconSrc?: string
}

export interface DropdownProps {
  text?: string
  items?: Array<Item>
}

const props = defineProps<DropdownProps>()

const styles = withTheme('dropdown')

const classes: any = styles
</script>

<template>
  <Menu v-slot="{ open }" as="div" :class="classes.wrapper">
    <MenuButton>
      <slot name="activator">
        <u-button
          type="text"
          size="small"
        >
          {{ props.text }}
          <template #appendIcon>
            <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
          </template>
        </u-button>
      </slot>
    </MenuButton>

    <div v-show="open">
      <transition :enter-active-class="classes.transition.enterActiveClass" :enter-from-class="classes.transition.enterFromClass" :enter-to-class="classes.transition.enterToClass" :leave-active-class="classes.transition.leaveActiveClass" :leave-from-class="classes.transition.leaveFromClass" :leave-to-class="classes.transition.leaveToClass">
        <slot name="menu">
          <MenuItems :class="classes.menu">
            <div v-for="item in props.items" :key="item.text">
              <MenuItem v-slot="{ active }" as="div" :disabled="item.disabled">
                <slot :active="active" :item="item">
                  <a
                    :class="classes.dropdownItem"
                    :href="item.href"
                    :target="item.target"
                  >
                    <div v-if="item.iconSrc" class="mr-3 w-4 h-4">
                      <u-icon :src="item.iconSrc" />
                    </div>
                    {{ item.text }}
                  </a>
                </slot>
              </MenuItem>
            </div>
          </MenuItems>
        </slot>
      </transition>
    </div>
  </Menu>
</template>
