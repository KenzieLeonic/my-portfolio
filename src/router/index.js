import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/blog/[slug]/BlogView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import AllBlogView from '@/views/AllBlogView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/blogs/:id',
    component: BlogView,
  },
  {
    path: '/blogs',
    name:"blog",
    component: AllBlogView,
  },
  {
    path: '/:catchAll(.*)*',
    name: 'notFound',
    component: NotFoundView
  }
  
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
