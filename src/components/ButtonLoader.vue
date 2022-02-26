<template>
    <button type="button" class="btn">
        <span class="spiner spinner-border spinner-border-sm" role="status"></span>
        <span class="btn-content">{{content}}</span>
    </button>
</template>

<script>
export default {
    name: 'ButtonLoader',
    props: ['content'],
}
</script>

<style scoped>
    .btn{
        position: relative;
    }
    .spiner{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        font-weight: n;
    }
    .loading .btn-content{
        visibility: hidden;
    }
    .loading .spiner{
        display: block;
    }
</style>