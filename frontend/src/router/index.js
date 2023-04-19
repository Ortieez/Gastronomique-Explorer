import { createRouter, createWebHistory } from 'vue-router'
import HomeMap from '../views/HomeMap.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeMap
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

export default router
