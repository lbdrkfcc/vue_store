<template>
  <div class="container">
    <div class="row">
      <div class="col mb-4">
        <h1>Cart</h1>
        <router-link :to="{ path: prevRoute }" class="link">
          <i class="bi bi-arrow-left"></i> Continue shopping
        </router-link>
      </div>
    </div>
    <div class="row cart-container">
      <div v-if="store.cart.length > 0" class="col">
        <div v-for="product in store.cart" :key="product.id" class="card align-items-center1 mb-3">

          <div class="card-body d-sm-flex flex-wrap">

            <div class="col-4 col-sm-2 col-lg-1 offset-4 offset-sm-0 mb-2 pe-3">
              <img :src="product.image" class="img-fluid mx-auto d-block" :alt="product.title">
            </div>

            <div class="col-12 col-sm-10 col-lg-11">
              <div class="row">

                <div class="col mb-2">
                  <h6 class="card-title">{{product.title}}</h6>
                  <strong class="text-primary">{{store.priceFormat(product.price*product.cartAmount)}}</strong>
                </div>

                <div class="col-12 col-lg-4">
                  <div class="row">

                    <div class="col-8 col-sm-6 col-lg-8">
                      <div class="input-group">
                        <button @click="store.removeFromCart(product.id)" class="btn btn-secondary" type="button">-</button>
                        <input type="text" class="form-control text-center" :value="product.cartAmount" readonly>
                        <button @click="store.addToCart(product)" class="btn btn-secondary" type="button">+</button>
                      </div>
                    </div>

                    <div class="col-4 col-sm-6 col-lg-4 text-end">
                      <button @click="store.removeCartItem(product.id)" class="btn btn-link btn-remove text-danger">
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
        <div class="row align-items-center">
          <div class="col-12 col-sm-6 col-lg-3 ms-lg-auto text-lg-center my-1">
            <div class="total-price ms-auto">
              <strong>Total:</strong> {{store.priceFormat(totalPrice)}}
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-2 text-sm-end my-1">
            <button @click="goToCheckout" class="btn btn-primary btn-lg" type="button">Check out</button>
          </div>
        </div>
 
      </div>
      <div v-else class="col">
        <p>Cart is empty</p>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store/store.js'

export default {
  data() {
    return {
      store,
      prevRoute: '/'
    }
  },
  methods: {
    goToCheckout(){
      this.$router.push({ 
        name: 'Checkout',
      })
    }
  },
  computed: {
    totalPrice(){
      return this.store.cart.reduce((price, item) => item.price*item.cartAmount + price, 0)
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if(from.path != '/checkout'){
        vm.prevRoute = from.path
      }
    })
  },
}
</script>

<style scoped>
  .total-price{
    font-size: 1.6rem;
  }
</style>
