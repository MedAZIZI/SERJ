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
        meta: { requiresNotAuth: true }
      },
      {
        path: 'login',
        name: 'Login', 
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
        meta: { requiresNotAuth: true }
      },
      {
        path: 'frgtPswrd',
        name: 'FrgtPswrd', 
        component: () => import(/* webpackChunkName: "FrgtPswrd" */ '@/views/Forgotpswrd.vue'),
        meta: { requiresNotAuth: true }
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
        meta: { requiresAuth: true }
      },
      {
        path: 'editprofil',
        name: 'EditProfil', 
        component: () => import(/* webpackChunkName: "editprofil" */ '@/views/EditProfil.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'catalogue',
        name: 'Catalogue', 
        component: () => import(/* webpackChunkName: "catalogue" */ '@/views/Catalogue.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'compreg',
        name: 'CompReg', 
        component: () => import(/* webpackChunkName: "compreg" */ '@/views/Company/Registration.vue'),
        meta: { requiresNotAuth: true }
      },
      {
        path: 'addJob',
        name: 'AddJob', 
        component: () => import(/* webpackChunkName: "addJob" */ '@/views/Company/AddJob.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'message',
        name: 'Message', 
        component: () => import(/* webpackChunkName: "message" */ '@/views/Message.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: () => import(/* webpackChunkName: "notifications" */ '@/views/notifications.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import(/* webpackChunkName: "settings" */ '@/views/settings/Settings.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '@/views/settings/about.vue'),
      },
      {
        path: 'privacy',
        name: 'Privacy',
        component: () => import(/* webpackChunkName: "privacy" */ '@/views/settings/privacy.vue'),
      },
      {
        path: 'terms',
        name: 'Terms',
        component: () => import(/* webpackChunkName: "terms" */ '@/views/settings/Terms.vue'),
      },
      {
        path: 'help',
        name: 'Help',
        component: () => import(/* webpackChunkName: "help" */ '@/views/settings/Help.vue'),
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
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('userId');
  
  if (to.matched.some(route => route.meta.requiresAuth) && !isAuthenticated) {
    // Redirigez l'utilisateur vers la page de connexion s'il n'est pas connecté
    next('/login');
  } else {
    // Laissez l'utilisateur accéder à la route demandée
    next();
  }
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('userId');
  
  if (to.matched.some(route => route.meta.requiresNotAuth) && isAuthenticated) {
    // Redirigez l'utilisateur vers la page de connexion s'il n'est pas connecté
    next('/profil');
  } else {
    // Laissez l'utilisateur accéder à la route demandée
    next();
  }
});
export default router
