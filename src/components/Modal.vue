<template>
    <Teleport to="body">
        <div @click="close($event)" class="modal" tabindex="-1">
            <div class="modal-dialog modal-xl modal-dialog-centered">
                <div class="modal-content">
                    <slot></slot>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade show"></div>
    </Teleport>
</template>

<script>
export default {
    name: 'Modal',
    emits: ['close'],
    methods: {
        close(event){
            if(event.target.classList.contains('modal')){
                this.$emit('close')
            }
        }
    },
    mounted() {
        document.body.setAttribute('style','overflow: hidden; padding-right: 17px;')
    },
    unmounted() {
        document.body.removeAttribute('style')
    }
}
</script>

<style scoped>
    .modal{
        display: block;
    }
</style>
