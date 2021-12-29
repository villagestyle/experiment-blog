import { RouteRecordRaw } from "vue-router";
import { routers as ManagementRouter } from './management';

export const routers: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Root",
    redirect: "/home",
    meta: {
      title: "Root"
    }
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../../views/home.vue"),
    meta: {
      title: "Home"
    }
  },
  ...ManagementRouter
];
