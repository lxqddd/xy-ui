import { App } from 'vue'
import Icon from './icon.vue'

export default {
  install (app: App): any {
    app.component('XyIcon', Icon)
  }
}
