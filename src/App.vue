<template>
  <div>
    <template v-for="(color, index) in colors" :key="index">
      <DButton :color="(color as IButtonColor)" />
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
}
</script>

<script lang="ts" setup>
import DButton from './button'
import { IButtonColor } from './button/DButton.vue'

const colors = ['red', 'yellow', 'blue', 'green', 'purple']
</script>
