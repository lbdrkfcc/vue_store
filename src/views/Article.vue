<template>
  <div class="container">
    <div class="row">
      <div class="col py-2">
        <h1>{{title}}</h1>
        <p v-html="content"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
      title: String,
      content: String,
  }
}
</script>