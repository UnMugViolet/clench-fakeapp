import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name : 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/projets',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/evenements',
      name: 'event',
      component: () => import('../views/EventView.vue')
    },
    {
      path: '/rejoindre',
      name: 'join',
      component: () => import('../views/JoinUsView.vue')
    },
    // {
    //   path: '/projet/:id',
    //   name: 'project',
    //   component: () => import('../views/ProjectIdView.vue')
    // },
    // {
    //   path: '/evenement/:id',
    //   name: 'event',
    //   component: () => import('../views/EventView.vue')
    // }
  ]
})

export default router
