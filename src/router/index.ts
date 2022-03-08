import { createWebHistory, createRouter } from "vue-router";
import { routers } from "./modules";
import { scrollBehaviorFn } from "./scrollBehavior";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [...routers],
  strict: true,
  // 管理组件滚动行为
  scrollBehavior: scrollBehaviorFn
});

export default router;
