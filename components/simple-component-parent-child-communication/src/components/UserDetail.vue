<template>
  <div class="component">
    <h5>You may view your User Details here</h5>
    <p>Many Details</p>
    <p>Current username: {{ sharedName }}</p>
    <hr>
    <button @click="fireEvent()">Change the name</button>
   </div>
</template>

<script>
  export default {
    // props: ['sharedName']
    props: {
      sharedName: String,
    },
    methods: {
      fireEvent() {
        this.sharedName = "changedFromChild"
        this.$emit("nameChange", this.sharedName)
      }
    }

  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
