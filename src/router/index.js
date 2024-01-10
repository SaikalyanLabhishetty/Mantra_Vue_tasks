import { createRouter, createWebHistory } from 'vue-router'
import TaskOne from '../components/TaskOne.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TaskOne
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginForm.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp.vue')
    }
  ]
})

export default router
