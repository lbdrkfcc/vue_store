<template>
    <slot></slot>
    <div v-if="error" class="invalid-feedback d-block">{{error}}</div>
</template>

<script>
export default {
    name: 'InputValidation',
    data(){
        return {
            
        }
    },
    methods: {
        
    },
    watch: {
        
    }
}
</script>

<style scoped>
    
</style>