<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-6 mx-auto">
        <user></user>
      </div>
    </div>
  </div>
</template>

<script>
  import User from './components/User.vue';
  export default {
    components:{
      User
    }
  }
</script>

<style scoped>
  div.component {
    border: 2px solid black;
    padding: 30px;
  }
</style>
