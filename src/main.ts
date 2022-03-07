import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from "./router"
import store from "./store"

const app = createApp(App)

setupRouter(app)
app.use(store)

router.isReady().then(() => {
  app.mount("#app")
})