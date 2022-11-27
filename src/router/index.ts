import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Default from '@/layouts/DefaultLayout.vue';
import AuthView from '@/views/AuthView.vue';
import OrdersView from '@/views/OrdersView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: OrdersView,
    meta: {
      layout: Default,
    },
  },
  {
    path: '/sign-in',
    name: 'auth',
    component: AuthView,
    meta: {
      layout: Default,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
