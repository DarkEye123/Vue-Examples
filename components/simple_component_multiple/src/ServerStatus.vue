<template>
  <div>
    <h2> server status: {{state}}</h2>
    <hr>
    <button @click="changeState">change state</button>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          state: "critical"
        }
      },
      methods: {
        changeState() {
          this.state = "normal"
        }

      }
    }
</script>

<style scoped>

</style>
