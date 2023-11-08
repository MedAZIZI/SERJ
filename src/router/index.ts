// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'registration',
        name: 'Registration', 
        component: () => import(/* webpackChunkName: "registration" */ '@/views/Registeration.vue'),
      },
      {
        path: 'login',
        name: 'Login', 
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
      },
      {
        path: 'frgtPswrd',
        name: 'frgtPswrd', 
        component: () => import(/* webpackChunkName: "FrgtPswrd" */ '@/views/Forgotpswrd.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
