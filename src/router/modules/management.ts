import { RouteRecordRaw } from "vue-router";

export const Management: RouteRecordRaw[] = [
    {
        path: "/m",
        redirect: "/m/login"
    },
    {
        path: "/m/login",
        name: "MLogin",
        component: () => import("src/views/management/login.vue")
    }
];
