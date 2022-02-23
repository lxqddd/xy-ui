import { App } from 'vue'
import Icon from './icon.vue'

export default {
  install (app: App) {
    app.component(Icon.name, Icon)
  }
}
