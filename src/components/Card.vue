<template>
  <div class="col-sm-4 col-12 px-3 mb-4">
    <div class="card h-100">
      <img :src="imagen" class="card-img-top" :alt="nombre" />
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ nombre }}</h5>
        <p class="card-text">{{ descripcion }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Precio: ${{ precio.toLocaleString() }}</li>
        <li class="list-group-item">{{ cantidad }}</li>
      </ul>
      <div class="card-body">
        <router-link :to="{ name: 'productos', params: { id: id } }" class="btn btn-primary me-2">Ver mas</router-link>
        <a href="#" class="btn btn-success">Comprar</a>
        <router-link to="/" class="btn-volver">Volver al inicio</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [Number, String],
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    precio: {
      type: Number,
      required: true
    },
    cantidad: {
      type: [Number, String],
      required: true
    },
    imagen: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.btn-volver {
  display: inline-block;
  margin-top: 20px;
  padding: 5px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.btn-volver:hover {
  background-color: #0056b3;
}
</style>
