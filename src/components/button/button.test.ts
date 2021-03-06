import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import Button from './button.vue'
import Icon from '@/components/icon/icon.vue'

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

  it('should show difficult size button when we set size', () => {
    const wrapper = mount(Button, {
      props: {
        size: 'mini'
      }
    })
    expect(wrapper.classes()).toContain('xy-button-mini')
  })

  it('should show text when we set slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: TEXT
      }
    })
    expect(wrapper.text()).toEqual(TEXT)
  })

  it('should can not be call when we set disabled equal true', async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('should has a prev icon when we set prev slot as a icon component', () => {
    // const App = defineComponent({
    //   setup: () => () =>
    //   (
    //     <Button>
    //       Loading
    //     </Button>
    //   )
    // })
  })
})
