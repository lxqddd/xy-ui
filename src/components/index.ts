import { App } from 'vue'
import Button from './button'
import Icon from './icon'

const components = [
  Button,
  Icon
]

export default {
  install (app: App): any {
    components.map(comp => {
      app.use(comp)
    })
  }
}
