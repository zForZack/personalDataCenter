import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/menu/menu.vue'),
    children: [{
      path: 'mainPage',
      name: 'mainPage',
      component: () => import('@/views/pages/mainPage.vue')
    }]
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/components/HelloWorld.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
