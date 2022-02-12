<template>
  <div class="button">
    {{ props.type }}
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

export type buttonType = 'primary' | 'info' | 'success' | 'warning' | 'danger'
export interface IButtonPropsType {
  type: buttonType
}

const props = defineProps<IButtonPropsType>()
console.log(props.type)
</script>
