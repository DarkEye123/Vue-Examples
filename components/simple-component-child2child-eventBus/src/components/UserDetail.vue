<template>
  <div class="component">
    <h5>You may view your User Details here</h5>
    <p>Many Details</p>
    <p>Current username: {{ sharedName }}</p>
    <hr>
    <button @click="fireEvent()">Change the name by event</button>
    <button @click="parentMethod()">Change the name by callback</button>
   </div>
</template>

<script>
  import {EventBus} from '../main.js'
  export default {
    // props: ['sharedName']
    props: {
      sharedName: String,
      parentMethod: Function
    },
    methods: {
      fireEvent() {
        this.sharedName = "changedFromChild"
        this.$emit("nameChange", this.sharedName)
      }
    },
    created() {
      // this is just for an example ... changing value of props this way is not appropriate bevase if page reloads value from the parent is used again
      EventBus.$on("childCom", (data) => {this.sharedName = data})
    }

  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
