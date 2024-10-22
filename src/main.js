import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style.css'

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import MediosPago from './components/MediosPago.vue'

createApp(App).use(router).mount('#app')
