<template>
    <div class="d-flex">
        <div class="w-100">
            <div class="form-floating">
                <input 
                    v-model="discount" 
                    type="text" 
                    class="form-control" 
                    :class="{'is-invalid': error}" 
                    id="discount" 
                    placeholder="Discount code"
                >
                <label for="discount">Discount code</label>
            </div>
        </div>
        <Button-loader 
            @click="discountValidation"
            content="Apply"
            class="btn-primary ms-2 px-4"
            :class="{
                disabled: !discount,
                loading: loading,
            }"
        />
    </div>
    <div v-if="error" class="invalid-feedback d-block">{{error}}</div>
</template>

<script>
import ButtonLoader from '@/components/ButtonLoader.vue'

export default {
    name: 'Discount',
    components: {
        ButtonLoader,
    },
    data(){
        return {
            discount: '',
            loading: false,
            error: ''
        }
    },
    methods: {
        discountValidation(){
            this.loading = true
            setTimeout(() => {
                this.loading = false
                this.error = 'Enter a valid discount code.'
            }, 2000)
        }
    },
    watch: {
        'discount'(){
            this.error = ''
        }
    }
}
</script>

<style scoped>
    
</style>