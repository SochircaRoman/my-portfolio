import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorksView from '../views/WorksView.vue'
import BlogView from '../views/BlogView.vue'
import ErrorPage from '../views/ErrorPage.vue'
import PostDetail from '../components/UI/PostDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/works',
      name: 'works',
      component: WorksView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostDetail,
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'errorpage',
      component: ErrorPage
    }
  ]
})

export default router
