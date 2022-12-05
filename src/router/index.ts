import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductCard from '../components/ProductCard.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/sell',
    name: 'sell',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SellView.vue'),
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import('../views/RegisterView.vue'),
  },
  {
    path: '/ce',
    name: 'ce',
    component: () => import('../views/ConsumeView.vue'),
  },
  {
    path: '/prod',
    name: 'prod',
    component: ProductCard,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
