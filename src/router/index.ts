import { createRouter, createWebHistory } from 'vue-router'
import UsersListView from '../views/UserListView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'usersList',
      component: UsersListView
    },
  ]
})

export default router
