import { createRouter, createWebHistory } from 'vue-router'
import { store } from '../store/store.js'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Article.vue'),
    props: {
      title: 'About us',
      content: 'No content',
    },
  },
  {
    path: '/shipping',
    name: 'Shipping',
    component: () => import('../views/Article.vue'),
    props: {
      title: 'Shipping details',
      content: '<b>No content</b>',
    },
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/Article.vue'),
    props: {
      title: 'Privacy police',
      content: 'No content',
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/:category',
    name: 'Category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    props: true,
    component: () => import('../views/Checkout.vue'),
    beforeEnter: (to, from, next) => {
      if(store.cart.length <= 0){
        next('/cart')
      }else{
        next()
      }
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
