<template>
  <div id="app">
    <Navbar />
    <main class="container mt-5 pt-5">
      <router-view/>
    </main>
    <MediosPago/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import MediosPago from './components/MediosPago.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    MediosPago
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  min-height: calc(100vh - 60px - 100px); /* Adjust these values based on your navbar and footer heights */
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
</style>
