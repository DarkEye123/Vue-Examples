<template>
  <div id="app">
    <p v-highlight>my own directive</p>
    <p v-highlight="'red'">my own directive with value</p>
    <p v-highlight:textColor="'red'">my own directive with argument</p>
    <p v-highlight:textColor.delayed="'lightblue'">my own directive with argument and modifier</p>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
