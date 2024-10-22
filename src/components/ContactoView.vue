<template>
  <div class="contacto">
    <h1>Contacto</h1>
    <p>Puedes contactarnos en:</p>
    <ul>
      <li>Email: contacto@mitienda.com</li>
      <li>Teléfono: +56 9 1234 5678</li>
      <li>Dirección: Calle Ejemplo 123, Ciudad, País</li>
    </ul>
    <router-link to="/" class="btn-volver">Volver al inicio</router-link>
  </div>
</template>

<script>
export default {
  name: 'ContactoView'
}
</script>

<style scoped>
.contacto {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

.btn-volver {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.btn-volver:hover {
  background-color: #0056b3;
}
</style>
