<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-6 mx-auto">
        <app-quote>
          <h1>{{ title }}</h1>
          <p>A wonderful body!</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote';
  export default {
    data() {
      return {
        title: "A wonderful quote!"
      }
    },
    components: {
      appQuote: Quote
    }
  };
</script>

<style scoped>
</style>
