import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import LoginView from '../views/LoginView.vue'
import GameView from '../views/GameView.vue'
import NewsView from  '../views/NewsView.vue'
const routes = [
{
  path: '/',
  name: 'Index',
  component:  IndexView,
},{
  path: '/index',

  component: IndexView,
},{
  path: '/login',
name: 'Login',
  component: LoginView,
},
{
  path: '/game',
name: 'game',
  component: GameView,
},
{
  path: '/news',
name: 'news',
  component: NewsView,
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
