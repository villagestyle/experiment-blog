import { RouteRecordRaw } from "vue-router";
import Layout from 'src/layout/index.vue';
import { Article } from './article';
import { Management } from './management';

export const routers: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Root",
    component: Layout,
    redirect: "/home",
    meta: {
      title: "Root"
    },
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("src/views/home.vue"),
        meta: {
          title: "Home"
        }
      },

      ...Article,
    ]
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

  ...Management,

  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  },
];