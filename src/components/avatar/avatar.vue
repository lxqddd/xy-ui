<template>
  <div
    :class="classes"
    :style="style"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import classNames from 'classnames'

type sizeType = 'small' | 'medium' | 'large'

interface IAvatarProps {
  src?: string
  size?: sizeType | number
  bgColor?: string
  failBackSrc?: string
  bordered?: boolean
  objectFit?: 'file' | 'contain' | 'cover' | 'none' | 'scale-down'
  round?: boolean
  className?: string
  onError?: (e: Event) => void | undefined
}

const props = withDefaults(defineProps<IAvatarProps>(), {
  src: '',
  size: 'medium',
  bgColor: '#FFF',
  failBackSrc: '',
  bordered: true,
  objectFit: 'file',
  round: true,
  className: '',
  onError: undefined
})

const style = {
  background: `url('${props.src || props.failBackSrc}')`,
  backgroundColor: props.bgColor
}

const classes = classNames('xy-avatar', props.className, {
  [`round`]: props.round,
  [`bordered`]: props.bordered,
  [`${props.size}`]: props.size,
  [`${props.objectFit}`]: props.objectFit
})

console.log(classes)
</script>

<script lang="ts">
export default { name: 'XyAvatar' }
</script>
