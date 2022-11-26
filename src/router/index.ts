import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Default from '@/layouts/DefaultLayout.vue';
import AuthView from '@/views/AuthView.vue';
import HomeView from '@/views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: Default,
    },
  },
  {
    path: '/sign-in',
    name: 'home',
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
