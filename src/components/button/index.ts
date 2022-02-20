import { App } from 'vue'
import Button from './button.vue'

export default {
  install (app: App): any {
    app.component('XyButton', Button)
  }
}
