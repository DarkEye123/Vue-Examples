<template>
  <div class="component">
    <h5>You may view your User Details here</h5>
    <p>Many Details</p>
    <p>Current username: {{ sharedName }}</p>
   </div>
</template>

<script>
  export default {
    props: ['sharedName']
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
