<template>
  <div class="component">
    <p>I'm the user Component</p>
    <hr>
    <button @click="changeName">Change the name</button>
    <p>Current name in the parent: {{ userName }}</p>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
          <user-detail v-bind:sharedName="userName" @nameChange="userName = $event" :parentMethod="resetName"></user-detail>
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
    data() {
      return {
        userName: 'UserName'
      }
    },
    methods: {
      changeName() {
        this.userName = "Changed UserName"
      },
      resetName() {
        this.userName = 'UserName'
      }
    },
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
