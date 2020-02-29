import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component:()=> import("../views/home/Home.vue")
  },
  {
    path: '/sort',
    name: 'sort',
    component:()=> import("../views/categray/Sort.vue")
  },
  {
    path: '/cart',
    name: 'cart',
    component:()=> import("../views/cart/Cart.vue")
  },
  {
    path: '/profile',
    name: 'profile',
    component:()=> import("../views/profile/Profile.vue")
  },
]

const router = new VueRouter({
  routes
})

export default router
