<template>
  <div class="component">
    <p>I'm the user Component</p>
    <hr>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
          <user-detail></user-detail>
        </div>
        <div class="col-xs-12 col-sm-6">
          <user-edit></user-edit>
        </div>
      </div>
  </div>
</template>

<script>
  import UserDetail from './UserDetail';
  import UserEdit from './UserEdit';
  export default {
    components:{
      UserDetail,
      UserEdit
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
