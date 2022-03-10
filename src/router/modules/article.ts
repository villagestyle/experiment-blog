import { RouteRecordRaw } from "vue-router";

export const Article: RouteRecordRaw[] = [
  {
    path: "/article",
    name: "Article",
    component: () => import("src/views/article/index.vue")
  }
]