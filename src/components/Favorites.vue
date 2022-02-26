<template>
    <div class="btn-group">
        <button @click="toggleDropdown" class="btn btn-link nav-link position-relative fs-3">
          <i class="bi bi-heart-fill"></i>
          <span class="badge rounded-pill bg-danger">{{ store.favorites.length }}</span>
        </button>
        <ul class="dropdown-menu" :class="{show: isDropdownOpen}">
          <template v-if="store.favorites.length > 0">

              <li v-for="favorite in store.favorites" :key="favorite.id">
                <div class="dropdown-item">
                  <span class="favorite-img">
                    <img :src="favorite.image" alt="pic">
                  </span>
                  <span class="favorite-title" :title="favorite.title">{{favorite.title}}</span>
                  <button 
                    @click.stop="deliteFavorite(favorite.id)" 
                    class="btn btn-link text-danger ms-auto" 
                    type="button"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </li>

          </template>
          <template v-else>
            <li>
              <div class="dropdown-item disabled">No favorites</div>
            </li>
          </template>
        </ul>
    </div>
</template>

<script>
import { store } from '../store/store.js'

export default {
  name: 'Favorites',
  data(){
    return {
      store,
      isDropdownOpen: false
    }
  },
  methods: {
      toggleDropdown(){
        this.isDropdownOpen = !this.isDropdownOpen
      },
      closeDropdown(e){
        if (!this.$el.contains(e.target)){
          this.isDropdownOpen = false
        }
      },
      deliteFavorite(id){
        this.store.removeFavorite(id)
        this.isDropdownOpen = true
      },
  },
  mounted(){
    document.addEventListener('click', this.closeDropdown)
  },
  beforeUnmount(){
    document.removeEventListener('click',this.closeDropdown)
  },
}
</script>

<style scoped>
  .nav-link>.badge{
    position: absolute;
    top: 0px;
    right: -12px;
    font-size: .7rem;
  }
  .dropdown-item{
    display: flex;
    align-items: center;
  }
  .dropdown-menu{
    position: absolute;
    inset: 0px 0px auto auto;
    margin: 0px;
    transform: translate(0.375px, 40px);
  }
  .favorite-img{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    overflow: hidden;
  }
  .favorite-img>img{
    width: 60%
  }
  .favorite-title{
    max-width: 30vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>

