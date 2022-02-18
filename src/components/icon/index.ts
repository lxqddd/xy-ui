import { App } from 'vue'
import Icon from './icon.vue'

Icon.install = (app: App) => {
  app.component('XyIcon', Icon)
}

export default Icon
