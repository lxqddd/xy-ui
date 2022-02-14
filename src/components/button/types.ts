import type { ExtractPropTypes } from 'vue'
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

export type ButtonProps = ExtractPropTypes<IButtonPropsType>
