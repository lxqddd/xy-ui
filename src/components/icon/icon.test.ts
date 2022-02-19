import { mount } from '@vue/test-utils'
import XyIcon from './icon.vue'

describe('Icon components test', () => {
  it('should has icon name class when we set name and type props', () => {
    const wrapper = mount(XyIcon, {
      props: {
        name: 'home',
        type: 'line'
      }
    })
    expect(wrapper.classes()).toContain('ri-home-line')
  })

  it('should has size class when we set size props', () => {
    const wrapper = mount(XyIcon, {
      props: {
        name: 'home',
        type: 'line',
        size: 'ri-10x'
      }
    })
    expect(wrapper.classes()).toContain('ri-10x')
  })

  it('should has customer className when we set className props', () => {
    const wrapper = mount(XyIcon, {
      props: {
        name: 'home',
        type: 'line',
        className: 'xy'
      }
    })
    expect(wrapper.classes()).toContain('xy')
  })
})
