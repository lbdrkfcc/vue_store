<template>
    <div class="card mb-3">
        <div class="card-body image">
            <img class="img-fluid" :src="image" :alt="title">
        </div>
        <div class="card-body title">
            <h5 @click="modalOpen" class="card-title" :title="title">{{title}}</h5>
        </div>
        <div class="card-body price text-primary">{{store.priceFormat(price)}}</div>
        <div class="card-body links">
            <ProductButtons 
                :id="id"
                :title="title"
                :price="price"
                :image="image"
            />
        </div>
    </div>

    <Modal v-if="isModalOpen" @close="modalClose">
        <div class="modal-header">
            <h5 class="modal-title">{{title}}</h5>
            <button @click="modalClose" type="button" class="btn-close"></button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-12 col-md-3 mb-3 text-center">
                    <div class="image">
                        <img class="img-fluid" :src="image" :alt="title">
                    </div>
                </div>
                <div class="col-12 col-md-9">
                    <p>{{description}}</p>
                    <p><StarRating :rate="rating.rate" /></p>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <ProductButtons 
                :id="id"
                :title="title"
                :price="price"
                :image="image"
            />
            <button @click="modalClose" type="button" class="btn btn-secondary ms-auto">Close</button>
        </div>
    </Modal>
</template>

<script>
import { store } from '../store/store.js'
import Modal from '@/components/Modal.vue'
import ProductButtons from '@/components/ProductButtons.vue'
import StarRating from '@/components/StarRating.vue'

export default {
  name: 'ProductCard',
  components: { 
    Modal,
    ProductButtons,
    StarRating
  },
  props: {
    id: Number,
    title: String,
    price: Number,
    image: String,
    category: String,
    description: String,
    rating: Object,
  },
  data(){
    return {
        store,
        isModalOpen: false
    }
  },
  methods: {
    modalOpen(){
        this.isModalOpen = true
    },
    modalClose(){
        this.isModalOpen = false
    },
  },
}
</script>

<style scoped>
.btn-cart{
        min-width: 120px;
    }
    .card{
        height: 420px;
        max-width: 320px;
        margin: auto;
    }
    .image{
        height: 200px;
        max-height: 200px;
        text-align: center;
    }
    .image>img{
        width: auto;
        max-height: 100%;
    }
    .card-body.title{
        font-size: 1.4rem;
        height: 4rem;
        min-height: 2rem;
        max-height: 4rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
    }
    .card-body.title:hover{
        text-decoration: underline;
    }
    .card-body.price{
        padding-top: 0;
        padding-bottom: 0;
        display: flex;
        align-items: center;
        font-size: 1.6rem;
    }
    .card-body.links{
        display: flex;
        align-items: center;
    }
</style>
