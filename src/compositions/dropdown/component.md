```html
<script lang="ts" setup>
import { useSlots } from 'vue'
import { withTheme } from '@/theme'

interface Props {
  active: boolean
  class: string
  disabled: boolean
  type: string
  href: string
  target: string
}

const emit = defineEmits(['click'])
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
})

const slots = useSlots()

const styles = withTheme('item')

const classes = [styles.base]

if (props.disabled)
  classes.push(styles.disabled)

if (props.class)
  classes.push(props.class)

</script>

<script lang="ts">
export default { name: 'Item' }
</script>

<template>
  <a
    :class="[classes, active ? styles.hover : '']"
    :href="props.href"
    :target="props.target"
    @click="e => emit('click', e)"
  >
    <div v-if="$slots.prefixIcon" class="mr-3">
      <slot name="prefixIcon" />
    </div>
    <slot />
    <div v-if="$slots.appendIcon" class="ml-3">
      <slot name="appendIcon" />
    </div>
  </a>
</template>
```