<template>
  <div class="container">
      <div class="row">
        <div class="col text-center">
          <h1>All products</h1>
        </div>
      </div>
      <Products/>
  </div>
</template>

<script>
import Products from '@/components/Products.vue'

export default {
  name: 'Home',
  components: { 
    Products,
  },
}
</script>
