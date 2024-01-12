// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import TaskOne from '../components/TaskOne.vue';
import TaskThree from "../components/TaskThree.vue"
import TaskFour from "../components/TaskFour.vue"
import TaskFive from '../components/TaskFive.vue'
import TaskFiveRoute from '../components/TaskFiveRoute.vue'

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
    },
    {
      path: '/events',
      name: 'events',
      component: TaskThree
    },
    {
      path:'/emittask',
      name:'emittask',
      component: TaskFour
    },
    {
      path:'/movies',
      name:'movie',
      component:TaskFive
    },
    {
      path: '/movies/:id',
      name: 'movieDetails',
      component: TaskFiveRoute,
    },
    {
      path: '/task',
      name:'taskManagement',
      component:() => import('../views/product.vue')
    }
  ]
})

export default router
