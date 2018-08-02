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
  export default {
    // props: ['sharedName']
    props: {
      sharedName: String,
      parentMethod: Function
    },
    methods: {
      fireEvent() {
        this.$emit("nameChange", "name changed by event")
      }
    }

  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
