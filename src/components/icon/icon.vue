<template>
  <i :class="classes" />
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'
import classNames from 'classnames'
type IconSize = 'ri-fw'
                | 'ri-xxs'
                | 'ri-xs'
                | 'ri-sm'
                | 'ri-1x'
                | 'ri-lg'
                | 'ri-xl'
                | 'ri-2x'
                | 'ri-3x'
                | 'ri-4x'
                | 'ri-5x'
                | 'ri-6x'
                | 'ri-7x'
                | 'ri-8x'
                | 'ri-9x'
                | 'ri-10x'
                | ''
interface IIconProps {
  name: string
  type: 'line' | 'file'
  color?: string
  size?: IconSize
  className?: string
}
const props = withDefaults(defineProps<IIconProps>(), {
  name: 'home',
  type: 'line',
  color: '',
  size: 'ri-fw',
  className: ''
})
const classes = classNames('xy-icon', props.className, props.size, {
  [`ri-${props.name}-${props.type}`]: props.name && props.type
})
</script>
<script lang="ts">
export default { name: 'XyIcon' }
</script>
