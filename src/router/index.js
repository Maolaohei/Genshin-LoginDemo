import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import LoginView from '../views/LoginView.vue'
const routes = [
{
  path: '/',
  name: 'Index',
  component: IndexView,
},{
  path: '/index',

  component: IndexView,
},{
  path: '/login',
name: 'Login',
  component: LoginView,
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
