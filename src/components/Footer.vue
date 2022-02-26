<template>
    <footer class="bg-dark text-light mt-4 py-3">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 mb-4">
                    <div class="row">
                        <div class="col">
                            <router-link to="/" class="navbar-brand text-light">{{store.logo}}</router-link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <a href="https://www.instagram.com/" class="social-link text-light" title="instagram">
                                <i class="bi bi-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/" class="social-link text-light" title="facebook">
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a href="https://twitter.com/" class="social-link text-light" title="twitter">
                                <i class="bi bi-twitter"></i>
                            </a>
                        </div>
                    </div>
                    
                </div>
                <div class="col-12 col-sm-6 col-md-4 mb-4">
                    <nav class="nav flex-column">
                        <ul class="list-unstyled">
                            <li class="py-1">
                                <router-link to="/about" class="link text-light">About US</router-link>
                            </li>
                            <li class="py-1">
                                <router-link to="/shipping" class="link text-light">Shipping Details</router-link>
                            </li>
                            <li class="py-1">
                                <router-link to="/privacy" class="link text-light">Privacy Policy</router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col-12 col-sm-12 col-md-4">
                    <div class="row">
                        <div class="col contacts">
                            <div class="h6">OPENING HOURS</div>
                            Monday - Saturday 10am - 8pm<br>
                            Sunday	10am - 7pm
                        </div>
                    </div>
                    <div class="row">
                        <div class="col contacts">
                            <div class="h6">ADDRESS</div>
                            207 Chalk Farm Road<br>
                            London, NW1 8AB
                        </div>
                    </div>
                    <!-- <div class="row">
                        <div class="col">
                            <div class="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.3259149166313!2d-0.14641391290903175!3d51.54160266790516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ae3e6cfa7d3%3A0x6402b6a8a4bcc446!2zMjA3IENoYWxrIEZhcm0gUmQsIExvbmRvbiBOVzEgOEFCLCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1645298076611!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { store } from '../store/store.js'

export default {
  name: 'Footer',
  data(){
      return {
          store,
      }
  }
}
</script>

<style scoped>
    .navbar-brand{
        display: inline-block;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    .social-link{
        display: inline-block;
        margin-right: 1rem;
        font-size: 1.5rem;
    }
    .social-link:hover{
        opacity: .9;
    }
    .nav-link{
        text-decoration: underline;
    }
    .contacts{
        margin-bottom: 1rem;
        font-size: .9rem;
    }
    .map>iframe{
        width: 100%;
        height: 300px;
    }
</style>
