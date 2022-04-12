import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from "./router";
import { createPinia } from 'pinia'
import "./styles/scss/global.scss";

import "./plugins/index";

const app = createApp(App);

app.use(createPinia());

setupRouter(app);

router.isReady().then(() => {
  app.mount("#app");
});