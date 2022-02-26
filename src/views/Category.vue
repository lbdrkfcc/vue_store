<template>
  <div class="container">
    <div class="row">
        <div class="col text-center">
            <h1>{{$route.params.category}}</h1>
        </div>
    </div>
    <Products/>
  </div>
</template>

<script>
import Products from '@/components/Products.vue'

export default {
  name: 'Category',
  components: { 
    Products,
  },
}
</script>

