import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/HomeView.vue')
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import('../components/ProductosView.vue'),
    props: {
      nombre: 'Colaciones',
      descripcion: 'Deliciosas colaciones para toda ocasión',
      precio: 5000,
      cantidad: 10
    }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../components/ContactoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
