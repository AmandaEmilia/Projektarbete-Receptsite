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
      path: '/category/:categoryId', // task 2.3.1 Skapa routes till Kategorisida
      name: 'category',
      component: () => import('../views/CategoryView.vue')
    },
    ,
    {
      path: '/recipe/:recipeId', // task 2.3.2 Skapa routes till Receptsida
      name: 'recipe',
      component: () => import('../views/RecipeView.vue')
    }
  ]
})

export default router
