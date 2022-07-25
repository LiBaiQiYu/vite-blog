import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import("../pages/welcome.vue")
    },
    {
        path: '/home',
        component: () => import("../pages/home.vue")
    },
    {
        path: '/my',
        component: () => import("../pages/my.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router