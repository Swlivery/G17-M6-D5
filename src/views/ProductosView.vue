<template>
  <div>
    <h1>Productos</h1>
    <p>Aquí se mostrarán los productos.</p>
    <p>Nombre: {{ nombre }}</p>
    <p>Descripción: {{ descripcion }}</p>
    <p>Precio: ${{ precio }}</p>
    <p>Cantidad: {{ cantidad }}</p>
    <router-link to="/">Volver al inicio</router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductosView',
  props: {
    nombre: String,
    descripcion: String,
    precio: Number,
    cantidad: Number
  }
}
</script>
