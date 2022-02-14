import { mount } from '@vue/test-utils'
import Button from './button.vue'
import { ButtonProps } from './types'

const TEXT = 'xy is cool'

describe('test Button.vue', () => {
  it('should be create in document', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'success'
      }
    })
    expect(wrapper.classes()).toContain('xy-button-success')
  })
})
