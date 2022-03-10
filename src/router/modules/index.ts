import { RouteRecordRaw } from "vue-router";
import { Article } from './article';
import { Management } from './management';

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
    component: () => import("src/views/home.vue"),
    meta: {
      title: "Home"
    }
  },
  {
    path: '/404',
    name: "404",
    component: () => import("src/views/error-page/404.vue"),
    meta: {
      title: "404"
    }
  },
  {
    path: '/401',
    name: "401",
    component: () => import('src/views/error-page/401.vue'),
    meta: {
      title: "401"
    }
  },

  ...Article,
  ...Management,

  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  },
];
