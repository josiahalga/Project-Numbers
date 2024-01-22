import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/components/Register'
import MembershipForm from '@/components/MembershipForm'

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/membership-form',
    name: 'membership-form',
    component: MembershipForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
