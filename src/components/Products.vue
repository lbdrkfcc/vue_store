<template>
    <div v-if="products" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <div v-for="product in products" :key="product.id" class="col">
        <ProductCard 
            :id="product.id" 
            :title="product.title" 
            :price="product.price" 
            :image="product.image"
            :description="product.description"
            :rating="product.rating"
        />
        </div>
    </div>
    <Loader v-else />
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import Loader from '@/components/Loader.vue'

export default {
    name: 'Products',
    components: {
        ProductCard,
        Loader
    },
    props: {

    },
    data(){
        return {
            products: undefined
        }
    },
    methods: {
        async fetchProducts(){
            if(this.$route.params.category){
                fetch(`https://fakestoreapi.com/products/category/${this.$route.params.category}`)
                    .then(res => res.json())
                    .then(json => this.getProducts(json))
            }else{
                fetch('https://fakestoreapi.com/products')
                    .then(res => res.json())
                    .then(json => this.getProducts(json))
            }
        },
        getProducts(response){
            console.log('api')
            if(response.length > 0){
                this.products = response
            }else{
                this.$router.push('/')
            }
        }
    },
    mounted(){
        this.fetchProducts()
    },
    watch: {
        '$route'(){
            this.products = undefined
            this.fetchProducts()
        }
    }
}
</script>
