import { App } from 'vue'

export interface XyUIComponent {
  install: (app: App, ...options: any[]) => any
}
