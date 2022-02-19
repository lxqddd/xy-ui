import { createApp } from 'vue'
import 'remixicon/fonts/remixicon.css'
import './styles/index.scss'
import App from './App.vue'
import Components from './components/index'

const app = createApp(App)
app.use(Components)
app.mount('#app')
