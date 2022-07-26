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
        path: '/main',
        component: () => import("../pages/menu/main.vue")
    },
    {
        path: '/blog',
        component: () => import("../pages/menu/blog.vue")
    },
    {
        path: '/my',
        component: () => import("../pages/menu/my.vue")
    },
    {
        path: '/viewblog',
        component: ()=>import("../pages/markDown.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router