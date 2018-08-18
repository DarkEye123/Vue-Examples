<template>
  <div id="app">
    <p v-highlight>my own directive</p>
    <p v-highlight="'red'">my own directive with value</p>
    <p v-highlight:textColor="'red'">my own directive with argument</p>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
