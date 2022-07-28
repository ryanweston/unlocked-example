<script lang="ts" setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { UButton, UIcon, withTheme } from '@unlocked/foundation'

export interface Item {
  text: string
  active?: boolean
  class?: string
  disabled?: boolean
  type?: string
  href?: string
  target?: string
  iconSrc?: string
}

export interface DropdownProps {
  text?: string
  items: Array<Item>
}

const emit = defineEmits(['click'])

const props = defineProps<DropdownProps>()

const styles = withTheme('dropdown')

const classes: any = styles
</script>

<script lang="ts">
export default { name: 'UDropdown' }
</script>

<template>
  <Menu v-slot="{ open }" as="div" :class="classes.wrapper">
    <MenuButton>
      <slot name="activator">
        <UButton
          type="text"
          size="small"
        >
          {{ text }}
          <template #appendIcon>
            <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
          </template>
        </UButton>
      </slot>
    </MenuButton>

    <div v-show="open">
      <transition :enter-active-class="classes.transition.enterActiveClass" :enter-from-class="classes.transition.enterFromClass" :enter-to-class="classes.transition.enterToClass" :leave-active-class="classes.transition.leaveActiveClass" :leave-from-class="classes.transition.leaveFromClass" :leave-to-class="classes.transition.leaveToClass">
        <slot name="menu">
          <MenuItems :class="classes.menu">
            <div v-for="item in items" :key="item.text">
              <MenuItem v-slot="{ active }" as="div" :disabled="item.disabled">
                <slot :active="active" :item="item">
                  <!-- Can be abstracted into dropdown item component  -->
                  <a
                    :class="[classes.dropdownItem]"
                    :href="item.href"
                    :target="item.target"
                    @click="e => emit('click', e)"
                  >
                    <div v-if="$slots.prefixIcon" class="mr-3 w-4 h-4">
                      <slot name="prefixIcon" />
                    </div>
                    <slot>
                      {{ props.text }}
                    </slot>
                    <div v-if="$slots.appendIcon" class="ml-3 w-4 h-4">
                      <slot name="appendIcon" />
                    </div>
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
