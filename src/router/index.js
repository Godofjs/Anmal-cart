import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import preregister from "../views/preregister.vue";
import register from "../views/register.vue";
import login from "../views/Login.vue";
import cart from "../views/cart.vue";
import HomeLayout from '../Layout/HomeLayout.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: '/'

  },
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: "/",
        component: Home
      },
      {
        path: "/about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      },
    ]
  },

  {
    path: '/registration-init',
    component: preregister
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/login',
    component: login
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
