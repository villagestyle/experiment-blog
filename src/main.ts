import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"

// 路由守卫
import "./router/permission"

// 全局引入 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router);
app.use(store)
app.use(ElementPlus)

router.isReady().then(() => {
  app.mount("#app")
})