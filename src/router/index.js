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
      path: '/sensors',
      name: 'sensors',
      component: () => import('../views/SensorsView.vue'),

    },
    {
      path:'/sensors/metrics/:id',
      name: 'metrics',
      component: () => import('../views/MetricsView.vue')
    },
    {
      path: '/sensors/new',
      name: 'sensor-new',
      component: () => import('../views/CreateSensorView.vue')
    },
    {
      path: '/readings/:id',
      name: 'readings',
      component: () => import('../views/ReadingsView.vue')
    },
    {
      path: '/readings/new/:sensorid',
      name: 'reading-new',
      component: () => import('../views/CreateReadingView.vue')
    }
  ]
})

export default router
