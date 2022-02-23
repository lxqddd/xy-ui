import { App } from 'vue'
import Button from './button'
import Icon from './icon'
import Avatar from './avatar'

const components = [
  Button,
  Icon,
  Avatar
]

export default {
  install (app: App): any {
    components.map(comp => {
      app.use(comp)
    })
  }
}
