<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <Nav class="nav-mobile d-md-none" :class="{ open: isNavMobileOpen}"/>
    </div>
    <div class="container-fluid position-relative">
        <router-link to="/" class="navbar-brand fs-3">{{store.logo}}</router-link>
        <button @click="navMobileToggle" class="navbar-toggler d-md-none" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <Nav class="nav-descktop"/>
        <ul class="navbar-nav flex-row flex-wrap">
          <li>
            <Favorites/>
          </li>
          <li>
            <router-link to="/cart" class="nav-link position-relative fs-3" title="cart">
              <i class="bi bi-cart-fill"></i>
              <span class="badge rounded-pill bg-danger">{{store.cartAmount()}}</span>
            </router-link>
          </li>
        </ul>
    </div>
  </nav>
</template>

<script>
import { store } from '../store/store.js'
import Nav from '@/components/Nav.vue'
import Favorites from '@/components/Favorites.vue'

export default {
  name: 'Header',
  components: { 
    Nav, 
    Favorites,
  },
  data(){
    return {
      store,
      isNavMobileOpen: false
    }
  },
  methods: {
    navMobileToggle(){
      this.isNavMobileOpen = !this.isNavMobileOpen
    },
    navMobileClose(){
      this.isNavMobileOpen = false
    }
  },
  watch: {
    '$route'(){
        this.navMobileClose()
    }
  }
  
}
</script>

<style scoped>
  .container-fluid{
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .navbar-toggler{
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 60px;
    height: 45px;
    border: none;
  }
  .nav-mobile{
    display: block;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease-out;
  }
  .nav-mobile.open{
    max-height: 500px;
    transition: max-height 0.3s ease-in;
  }
  .nav-descktop{
    display: none;
    margin-left: auto;
    margin-right: auto;
  }
  .nav-link>.badge{
    position: absolute;
    top: 0px;
    right: -8px;
    font-size: .7rem;
  }
  .nav-link.active{
    text-decoration: underline;
  }
  .navbar-nav>li{
    margin-left: 12px;
  }
</style>