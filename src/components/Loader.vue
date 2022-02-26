<template>
    <div class="row">
        <div class="col s12 loader">
          <div class="d-flex justify-content-center my-3">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loader',
}
</script>

<style scoped>
    .loader{
        min-height: 50vh;
    }
</style>
