import { createApp } from 'vue'
import 'remixicon/fonts/remixicon.css'
import './styles/index.scss'
import App from './App.vue'
import { router } from './router/index'
import Icon from './components/icon/index'

const app = createApp(App)
app.use(Icon)
app.use(router)
app.mount('#app')
