<template>
  <button
    class="py-2 px-4 font-semibold rounded-lg shadow-md text-white border-none cursor-pointer m-1"
    :class="`bg-${props.color}-500 hover:bg-${props.color}-700`"
  >
    {{ props.color }}
  </button>
</template>

<script lang="ts">
import 'uno.css'
export default {
  name: 'DButton',
}
</script>

<script lang="ts" setup>
export type IButtonColor = 'red' | 'blue' | 'yellow' | 'green' | 'purple'
export interface IButtonProps {
  color?: IButtonColor
}

const props = withDefaults(defineProps<IButtonProps>(), {
  color: 'blue',
})
</script>
