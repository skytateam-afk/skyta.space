import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pricing from '../views/Pricing.vue'
import Academy from '../views/Academy.vue'
import Team from '../views/Team.vue'
import Terms from '../views/Terms.vue'
import Privacy from '../views/Privacy.vue'
import Brochure from '../views/Brochure.vue'
import NotFound from '../views/NotFound.vue'
import Quiz from '../views/Quiz.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/terms',
      name: 'term',
      component: Terms
    },
    {
      path: '/assessment',
      name: 'assessment',
      component: Quiz
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '/academy',
      name: 'academy',
      component: Academy
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/brochure',
      name: 'brochure',
      component: Brochure
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
