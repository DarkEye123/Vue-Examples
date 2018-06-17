<template>
   <div class="component">
    <p>You may edit the User here</p>
    <p>Edit Me!</p>
    <hr>
    <button @click="communicate()">Fire child communication</button>
   </div>
</template>

<script>
  import {EventBus} from '../main.js'
    export default {
      data() {
        return {
          childName: "child name"
        }
      },
      methods: {
        communicate() {
          EventBus.$emit("childCom", this.childName)
        }
      }
    }
</script>

<style scoped>
  div {
    background-color: lightgoldenrodyellow;
  }
</style>
