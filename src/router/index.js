import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkillIndex from '@/views/skills/SkillIndex.vue'
import SkillCreate from '@/views/skills/SkillCreate.vue'
import SkillEdit from '@/views/skills/SkillEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/skills',
      name: 'SkillIndex',
      component: SkillIndex
    },
    {
      path: '/skills/create',
      name: 'SkillCreate',
      component: SkillCreate
    },
    {
      path: '/skills/:id/edit',
      name: 'SkillEdit',
      component: SkillEdit,
      props: true
    },
  ]
})

export default router
