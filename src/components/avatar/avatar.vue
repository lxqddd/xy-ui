<template>
  <div>这是头像组件</div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

type sizeType = 'small' | 'medium' | 'large'

interface IAvatarProps {
  size?: sizeType | number
  bgColor?: string
  failBackSrc?: string
  bordered?: boolean
  objectFit?: 'file' | 'contain' | 'cover' | 'none' | 'scale-down'
  round?: boolean
  onError?: (e: Event) => void | undefined
}

const props = withDefaults(defineProps<IAvatarProps>(), {
  size: 'medium',
  bgColor: '#FFF',
  failBackSrc: '',
  bordered: true,
  objectFit: 'file',
  round: true,
  onError: undefined
})

console.log(props.size)
</script>

<script lang="ts">
export default { name: 'XyAvatar' }
</script>
