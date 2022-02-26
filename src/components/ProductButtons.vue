<template>
    <router-link to="/cart" v-if="store.cartHas(id)" class="btn btn-outline-success btn-cart">
        <i class="bi bi-cart-check-fill"></i> Cart
    </router-link>
    <button v-else @click="store.addToCart({id, title, price, image})" class="btn btn-success btn-cart">
        <i class="bi bi-cart-plus"></i> Add to cart
    </button>
    <button @click="toggleFavorite({id, title, image})" class="btn ms-2" :class="favoriteClassName">
        <i class="bi bi-heart"></i>
    </button>
</template>

<script>
import { store } from '../store/store.js'

export default {
    name: 'ProductButtons',
    props: {
        id: Number,
        title: String,
        price: Number,
        image: String,
    },
    data(){
        return {
            store,
            isFavorite: false,
        }
    },
    computed: {
        favoriteClassName(){
            return [this.isFavorite ? 'btn-danger' : 'btn-secondary']
        }
    },
    methods: {
        toggleFavorite(favorite){
            if(this.isFavorite){
                this.store.removeFavorite(favorite.id)
                this.isFavorite = false
            }else{
                this.store.addFavorite(favorite)
                this.isFavorite = true
            }
        },
    },
    mounted(){
        if(this.store.hasFavorite(this.id)){
            this.isFavorite = true
        }
    },
    watch: {
        'store.favorites.length'(){
            if(this.store.hasFavorite(this.id)){
                this.isFavorite = true
            }else{
                this.isFavorite = false
            }
        }
    }
}
</script>

<style scoped>
    .btn-cart{
        min-width: 120px;
    }
</style>
