<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  setup() {
    
  },
  components: {
    Header,
    Footer
  },
}
</script>

<style>
  h1,.h1{
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  h1:first-letter,.h1:first-letter{
    text-transform: uppercase;
  }
</style>
