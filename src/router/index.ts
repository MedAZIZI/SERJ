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
        name: 'FrgtPswrd', 
        component: () => import(/* webpackChunkName: "FrgtPswrd" */ '@/views/Forgotpswrd.vue'),
      },
      {
        path: 'map',
        name: 'Map', 
        component: () => import(/* webpackChunkName: "map" */ '@/views/map.vue'),
      },
      {
        path: 'profil',
        name: 'Profil', 
        component: () => import(/* webpackChunkName: "profil" */ '@/views/Profil.vue'),
      },
      {
        path: 'editprofil',
        name: 'EditProfil', 
        component: () => import(/* webpackChunkName: "editprofil" */ '@/views/EditProfil.vue'),
      },
      {
        path: 'catalogue',
        name: 'Catalogue', 
        component: () => import(/* webpackChunkName: "catalogue" */ '@/views/Catalogue.vue'),
      },
      {
        path: 'compreg',
        name: 'CompReg', 
        component: () => import(/* webpackChunkName: "compreg" */ '@/views/Company/Registration.vue'),
      },
      {
        path: 'addJob',
        name: 'AddJob', 
        component: () => import(/* webpackChunkName: "addJob" */ '@/views/Company/AddJob.vue'),
      },
      {
        path: 'message',
        name: 'Message', 
        component: () => import(/* webpackChunkName: "message" */ '@/views/Message.vue'),
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: () => import(/* webpackChunkName: "notifications" */ '@/views/notifications.vue'),
      },
          {
              path: 'Apply',
             name: 'Apply',
             component: () => import(/* webpackChunkName: "Apply" */ '@/views/Apply.vue'),
              props: true
           },
           {
            path: 'ApplyModal',
           name: 'ApplyModal',
           component: () => import(/* webpackChunkName: "ApplyModal" */ '@/views/ApplyModal.vue'),
            props: true
         }
         
        
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
