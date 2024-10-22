<template>
  <div class="productos">
    <h1 class="text-center mb-4">Nuestros Productos</h1>
    <div class="container">
      <div class="row">
        <Card 
          v-for="producto in productos" 
          :key="producto.id"
          :id="producto.id"
          :nombre="producto.nombre"
          :descripcion="producto.descripcion"
          :precio="producto.precio"
          :cantidad="producto.cantidad"
          :imagen="producto.imagen"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Card from './Card.vue'
import desayunoImg from '../assets/img/desayunos.jpg'
import colacionesImg from '../assets/img/colaciones.jpg'
import bebidasImg from '../assets/img/bebidas.jpg'
import dulcesImg from '../assets/img/dulces.jpg'
import empanadasImg from '../assets/img/empanadas.jpg'

export default {
  name: 'HomeView',
  components: {
    Card
  },
  setup() {
    const productos = ref([
      {
        id: 1,
        nombre: 'Desayunos',
        descripcion: 'Contamos con desayunos nutritivos y deliciosos',
        precio: 2000,
        cantidad: 15,
        imagen: desayunoImg
      },
      {
        id: 2,
        nombre: 'Colaciones',
        descripcion: 'Deliciosas colaciones para toda ocasion',
        precio: 5000,
        cantidad: 10,
        imagen: colacionesImg
      },
      {
        id: 3,
        nombre: 'Bebidas',
        descripcion: 'Refrescantes bebidas para acompañar tus comidas',
        precio: 1500,
        cantidad: 12,
        imagen: bebidasImg
      },
      {
        id: 4,
        nombre: 'Dulces',
        descripcion: 'Ricos dulces para acompañar tus comidas',
        precio: 1500,
        cantidad: 21,
        imagen: dulcesImg
      },
      {
        id: 5,
        nombre: 'Empanadas',
        descripcion: 'Deliciosas empanadas para acompañar tus comidas',
        precio: 1500,
        cantidad: 15,
        imagen: empanadasImg
      }
    
    
    
    ])

    return { productos }
  }
}
</script>

<style scoped>
.home {
  padding-top: 60px;
}
</style>
