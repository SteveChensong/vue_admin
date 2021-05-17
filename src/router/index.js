import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 定义路由路径
const routes = [
    {
        path: '/',
        redirect: 'goods',
    },
    {
        path: '/goods',
        component: () => import('../components/Goods'),
    },
    {
        path: '/actives',
        component: () => import('../components/Actives'),
    },
    {
        path: '/permission',
        component: () => import('../components/Permission'),
    },
    {
        path: '/404',
        component: () => import('../components/404'),
    },
    {
        path: '*',
        redirect: '404'
    }
];
// 构建路由对象
const router = new VueRouter({
    routes
})

export default router;