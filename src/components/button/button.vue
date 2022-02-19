<template>
  <button
    :class="classes"
    @click="handleClick"
  >
    <XyIcon
      :name="'home'"
      :type="'line'"
    />
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, defineEmits } from 'vue'
import classNames from 'classnames'
/** 按钮类型 */
export type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
/** 按钮尺寸 */
export type SizeType = 'mini' | 'sm' | 'default' | 'lg'
export interface IButtonPropsType {
  type?: ButtonType
  size?: SizeType
  /** 自定义类名 */
  className?: string
  /** 是否显示为块级元素 */
  block?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 按钮是否为圆形 */
  circle?: boolean
  /** 按钮颜色 */
  color?: string
  /** 按钮是否透明 */
  ghost?: boolean
  /** 按钮中图标的位置 */
  iconPlacement?: 'left' | 'right'
  /** 按钮是否在加载状态 */
  loading?: boolean
  /** 是否展示为文本按钮 */
  text?: boolean
  /** 按钮文本颜色 */
  textColor?: string
}

const props = withDefaults(defineProps<IButtonPropsType>(), {
  type: 'primary',
  size: 'default',
  className: '',
  block: false,
  disabled: false,
  circle: false,
  color: '',
  ghost: false,
  iconPlacement: 'left',
  loading: false,
  text: false,
  textColor: ''
})
const classes = classNames('xy-button', props.className, {
  [`xy-button-${props.type}`]: props.type,
  [`xy-button-${props.size}`]: props.size,
  'xy-button-block': props.block,
  'xy-button-disabled': props.disabled,
  'xy-button-circle': props.circle,
  [`ghost-${props.type}`]: props.ghost,
  'xy-button-text': props.text
})

const emits = defineEmits(['click'])

const handleClick = (e: MouseEvent) => {
  if (props.disabled) return
  e.preventDefault()
  emits('click', e)
}
</script>
<script lang="ts">
export default { name: 'XyButton' }
</script>
