import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/router'
import auth0 from './auth0Config'

const app = createApp(App)
app.use(router)
app.use(auth0)


app.mount('#app')

