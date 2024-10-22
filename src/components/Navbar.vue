<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container px-4">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/img/logo.png" alt="logo de suricata" />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" active-class="active">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/productos" active-class="active">Productos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacto" active-class="active">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
}

.navbar-brand img {
  height: 40px;
}

.nav-link {
  color: #333;
  font-weight: 500;
}

.nav-link:hover, .nav-link.active {
  color: #007bff;
}

@media (max-width: 991.98px) {
  .navbar-nav {
    padding-top: 1rem;
  }
}
</style>
