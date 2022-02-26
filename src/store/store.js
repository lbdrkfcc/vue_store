import { reactive } from 'vue'

export const store = reactive({
    logo: 'Vue+Shop',
    currency: '£',
    favorites: localStorage.favorites ? JSON.parse(localStorage.favorites) : [],
    cart: [],
    discounts: [],
    userDiscount: undefined,
    priceFormat(price){
        if(typeof price === 'string'){
            return price
        }
        if(price === 0){
            return 'Free'
        }
        price = price.toFixed(2)
        return this.currency+price
    },
    hasDiscount(){
        return false
    },
    hasFavorite(id){
        return this.favorites.find(item => item.id === id)
    },
    addFavorite(product){
        this.favorites.push(product)
        localStorage.favorites = JSON.stringify(this.favorites)
    },
    removeFavorite(id){
        this.favorites = this.favorites.filter(item => item.id !== id)
        localStorage.favorites = JSON.stringify(this.favorites)
    },
    cartHas(id){
        return this.cart.find(item => item.id === id)
    },
    cartAmount(){
        return this.cart.reduce((amount, item) => amount + item.cartAmount, 0)
    },
    addToCart(product){
        if(this.cartHas(product.id)){
            let index = this.cart.findIndex(item => item.id === product.id)
            this.cart[index].cartAmount++
        }else{
            product.cartAmount = 1
            this.cart.push(product)
        }
    },
    removeFromCart(id){
        let index = this.cart.findIndex(item => item.id === id)
        this.cart[index].cartAmount--
        if(this.cart[index].cartAmount <= 0){
            this.cart[index].cartAmount = 1
            // this.cart.splice(index, 1)
        }
    },
    removeCartItem(id){
        let index = this.cart.findIndex(item => item.id === id)
        this.cart.splice(index, 1)
    }
})