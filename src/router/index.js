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
      path: '/a-propos',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    // {
    //   path: '/signup',
    //   name: 'signup',
    //   component: () => import('../views/SignupView.vue')
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('../views/LoginView.vue')
    // },
    // {
    //   path: '/projet',
    //   name: 'project',
    //   component: () => import('../views/ProjectView.vue')
    // },
    // {
    //   path: '/projet/:id',
    //   name: 'project',
    //   component: () => import('../views/ProjectIdView.vue')
    // },
    // {
    //   path: '/evenement',
    //   name: 'event',
    //   component: () => import('../views/EventView.vue')
    // }
    // {
    //   path: '/evenement/:id',
    //   name: 'event',
    //   component: () => import('../views/EventIdView.vue')
    // }
  ]
})

export default router
