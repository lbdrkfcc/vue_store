<template>
  <div class="container">
    <div class="row">
      <div class="col py-2">
        <h1>Check out</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-6">
        <div class="row">
          <div class="col-12">
            <div class="row g-2 justify-content-center">
              <div class="col-12 col-sm-4">
                <div class="d-grid">
                  <button class="btn btn-warning text-primary" type="button"><i class="bi bi-paypal"></i> PayPal</button>
                </div>
              </div>
              <div class="col-12 col-sm-4">
                <div class="d-grid">
                  <button class="btn btn-dark text-light" type="button"><i class="bi bi-google"></i> Pay</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="or-divider"><span>or</span></div>
          </div>
          <div class="col-12">
            <form>

              <fieldset class="row">
                <div class="col-12">
                  <legend>Contact information</legend>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <div class="form-floating">
                      <input 
                        v-model="userInfo.email" 
                        type="email" 
                        class="form-control" 
                        :class="{ 'is-invalid': errors.email }"
                        id="email" 
                        placeholder="name@example.com"
                      >
                      <label for="email">Email</label>
                    </div>
                    <div v-if="errors.email" class="invalid-feedback d-block">{{errors.email}}</div>
                  </div>
                  
                  <div class="mb-3">
                    <div class="form-check">
                      <input v-model="userInfo.marketing" class="form-check-input" type="checkbox" id="accepts-marketing" checked>
                      <label class="form-check-label" for="accepts-marketing">Email me with news and offers</label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset class="row">
                <div class="col-12">
                  <legend>Shipping address</legend>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <select v-model="userInfo.country" class="form-select" id="country">
                      <Country/> 
                    </select>
                    <label for="country">Country/Region</label>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="mb-3">
                    <div class="form-floating">
                      <input 
                        v-model="userInfo.firstname" 
                        type="input" 
                        class="form-control" 
                        :class="{ 'is-invalid': errors.firstname }"
                        id="firstname" 
                        placeholder="First name"
                      >
                      <label for="firstname">First name</label>
                    </div>
                    <div v-if="errors.firstname" class="invalid-feedback d-block">{{errors.firstname}}</div>
                  </div>
                  
                </div>
                <div class="col-12 col-sm-6">
                  <div class="mb-3">
                    <div class="form-floating">
                      <input 
                        v-model="userInfo.lastname" 
                        type="input" 
                        class="form-control" 
                        :class="{ 'is-invalid': errors.lastname }"
                        id="lastname" 
                        placeholder="Last name"
                      >
                      <label for="lastname">Last name</label>
                    </div>
                    <div v-if="errors.lastname" class="invalid-feedback d-block">{{errors.lastname}}</div>
                  </div>
                  
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <div class="form-floating">
                      <input 
                        v-model="userInfo.address" 
                        type="input" 
                        class="form-control" 
                        :class="{ 'is-invalid': errors.address }"
                        id="address" 
                        placeholder="Address"
                      >
                      <label for="address">Address</label>
                    </div>
                    <div v-if="errors.address" class="invalid-feedback d-block">{{errors.address}}</div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input v-model="userInfo.apartment" type="input" class="form-control" id="apartment" placeholder="Apartment, suite, etc. (optional)">
                    <label for="apartment">Apartment, suite, etc. (optional)</label>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="mb-3">
                    <div class="form-floating">
                      <input 
                        v-model="userInfo.city" 
                        type="input" 
                        class="form-control" 
                        :class="{ 'is-invalid': errors.city }"
                        id="city" 
                        placeholder="City"
                      >
                      <label for="city">City</label>
                    </div>
                    <div v-if="errors.city" class="invalid-feedback d-block">{{errors.city}}</div>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="mb-3">
                    <div class="form-floating">
                      <input 
                        v-model="userInfo.postcode" 
                        type="input" 
                        class="form-control" 
                        :class="{ 'is-invalid': errors.postcode }"
                        id="postcode" 
                        placeholder="Postcode"
                      >
                      <label for="postcode">Postcode</label>
                    </div>
                    <div v-if="errors.postcode" class="invalid-feedback d-block">{{errors.postcode}}</div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input v-model="userInfo.phone" type="input" class="form-control" id="phone" placeholder="Phone (optional)">
                    <label for="phone">Phone (optional)</label>
                  </div>
                </div>
                <div class="col-12">
                  <legend>Shipping method</legend>
                </div>
                <div class="col-12">
                  <div class="list-group">
                    <label v-for="(option, index) in shippingOptions" :key="index" class="list-group-item py-3">
                      <input class="form-check-input me-1" type="radio" v-model="shipping" :value="index">
                      {{option.text}}
                      <span class="shipping-price">{{store.priceFormat(option.price)}}</span>
                    </label>
                  </div>
                </div>
                <div class="col-12 my-4">
                  <ButtonLoader 
                    @click="alert" 
                    content="Continue to payment" 
                    class="btn-primary btn-lg p-4 me-3"
                    :class="{loading: loading}"
                  />
                  <router-link to="/cart" class="btn btn-link py-3">Return to cart</router-link>
                </div>
              </fieldset>

            </form>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-5 offset-lg-1 d-none d-lg-block bg-light">
        <ul class="list-group list-group-flush p-1">
          <li class="list-group-item px-0 py-3">
            <div v-for="product in store.cart" :key="product.id" class="cart-product mb-3">
              <div class="product-img">
                <img :src="product.image" :alt="product.title">
                <span class="badge rounded-pill bg-primary">{{product.cartAmount}}</span>
              </div>
              <div class="product-title">{{product.title}}</div>
              <div class="product-price ms-auto p-2">{{store.priceFormat(product.price*product.cartAmount)}}</div>
            </div>
          </li>
          <li class="list-group-item px-0 py-4">
            <Discount/>
          </li>
          <li class="list-group-item px-0 py-3">
            <div class="list-row">
              <span>Subtotal</span><strong>{{store.priceFormat(subtotalPrice)}}</strong>
            </div>
            <div class="list-row">
              <span>Shipping</span><strong>{{store.priceFormat(shippingOptions[shipping].price)}}</strong>
            </div>
          </li>
          <li class="list-group-item px-0 py-2">
            <div class="list-row">
              <strong class="fs-5">Total</strong><strong class="fs-4">{{store.priceFormat(totalPrice)}}</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store/store.js'
import Country from '@/components/Country.vue'
import ButtonLoader from '@/components/ButtonLoader.vue'
import Discount from '@/components/Discount.vue'

export default {
  name: 'Checkout',
  components: {
    Country,
    ButtonLoader,
    Discount
  },
  data() {
    return {
      store,
      loading: false,
      userInfo: {
        email: '',
        marketing: true,
        country: 'United Kingdom',
        firstname: '',
        lastname: '',
        address: '',
        apartment: '',
        city: '',
        postcode: '',
        phone: '',
      },
      errors: {
        email: '',
        firstname: '',
        lastname: '',
        address: '',
        city: '',
        postcode: '',
      },
      shipping: 0,
      shippingOptions: [
        {
          value: 'Standart',
          price: 0,
          text: 'Standard Shipping (3-5 working days)'
        },
        {
          value: 'Express',
          price: 5.50,
          text: 'Express (1 to 3 business days)'
        }
      ]
    }
  },
  computed: {
    subtotalPrice(){
      return this.store.cart.reduce((price, item) => item.price*item.cartAmount + price, 0)
    },
    totalPrice(){
      return this.subtotalPrice + this.shippingOptions[this.shipping].price
    }
  },
  methods: {
    alert(){

      if(!this.userInfo.email){
        this.errors.email = 'Enter an email'
      }else{
        this.errors.email = ''
      }

      if(!this.userInfo.firstname){
        this.errors.firstname = 'Enter a first name'
      }else{
        this.errors.firstname = ''
      }

      if(!this.userInfo.lastname){
        this.errors.lastname = 'Enter a last name'
      }else{
        this.errors.lastname = ''
      }

      if(!this.userInfo.address){
        this.errors.address = 'Enter an address'
      }else{
        this.errors.address = ''
      }

      if(!this.userInfo.city){
        this.errors.city = 'Enter a city'
      }else{
        this.errors.city = ''
      }

      if(!this.userInfo.postcode){
        this.errors.postcode = 'Enter a ZIP / postal code'
      }else{
        this.errors.postcode = ''
      }

      let validErrors = [
        this.errors.email, 
        this.errors.firstname, 
        this.errors.lastname, 
        this.errors.address, 
        this.errors.city, 
        this.errors.postcode, 
      ]

      if(validErrors.every(item => !item)){
        this.loading = true
        setTimeout(() => {
          this.loading = false
            
          let data = {
            userContacts: this.userInfo,
            userCart: this.store.cart,
            shipping: this.shippingOptions[this.shipping],
            totalPrice: this.totalPrice,
          }
          console.log(JSON.stringify(data))
          alert('More information in console.')
        }, 2000)
      }
      
    },
  },
  watch: {
    'userInfo.email'(){
      this.errors.email = ''
    },
    'userInfo.firstname'(){
      this.errors.firstname = ''
    },
    'userInfo.lastname'(){
      this.errors.lastname = ''
    },
    'userInfo.address'(){
      this.errors.address = ''
    },
    'userInfo.city'(){
      this.errors.city = ''
    },
    'userInfo.postcode'(){
      this.errors.postcode = ''
    },
  }
}
</script>

<style scoped>
  .list-group-item{
    background: transparent;
  }
  .or-divider{
    margin: 1rem 1rem 1.2rem;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }
  .or-divider>span{
    tab-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0 2rem;
  }
  .or-divider::before, .or-divider::after{
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: grey;
  }
  .list-group-item{
    cursor: pointer;
  }
  .shipping-price{
    font-weight: bold;
    float: right;
  }
  .list-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .95rem;
    padding: .5rem;
  }
  .cart-product{
    display: flex;
    align-items: center;
  }
  .product-img{
    position: relative;
    margin-right: 1rem;
  }
  .product-img>img{
    display: block;
    object-fit: contain;
    background: transparent;
    width: 64px;
    height: 64px;
  }
  .product-img>.badge{
    position: absolute;
    top: 0;
    right: 0;
  }
  .product-title{
    font-size: .95rem;
  }
  .product-price{
    font-weight: bold;
  }
</style>

