<template>
    <ul class="nav d-md-flex">
        <template v-if="categories.length > 0">
            <li v-for="category in categories" :key="category" :category="category" class="nav-item">
                <router-link :to="`${category}`" class="nav-link" active-class="active">{{category}}</router-link>
            </li>
        </template>
    </ul>
</template>

<script>
export default {
  name: 'Nav',
  data(){
    return {
        categories: []
    }
  },
  methods: {
    async fetchCategorys(){
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => { this.categories = json })
    }
  },
  mounted(){
     this.fetchCategorys()
  }
}
</script>

<style scoped>
    .nav{
        justify-content: center;
    }
    .nav .nav-link:first-letter{
        text-transform: uppercase;
    }
</style>

