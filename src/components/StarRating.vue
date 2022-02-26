<template>
    <div class="rate">
        <template v-for="(star, key) in stars" :key="key">
            <i v-if="star" class="bi bi-star-fill text-warning"></i>
            <i v-else class="bi bi-star-fill text-secondary"></i>
        </template>
    </div>
</template>

<script>
export default {
    name: 'StarRating',
    props: {
        rate: Number,
    },
    data(){
        return {
            
        }
    },
    computed: {
        stars(){
            return [0,0,0,0,0].fill(1, 0, Math.round(this.rate))
        }
    }
}
</script>

<style scoped>
    .rate>i{
        letter-spacing: 6px;
    }
</style>
