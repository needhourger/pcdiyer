import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/Home.vue"
import NotFoundView from "../views/404.vue"

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router