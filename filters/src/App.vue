<template>
  <div id="app">
    <p>{{text | toUpper | filter-amp}}</p>
    <hr>
    <input v-model="iText" placeholder="type for filtering">
    <ul>
      <li v-for="(element, index) in filterElements" :key=index>{{element}}</li> 
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "app",
  data() {
    return {
      text: "example text",
      iText: "",
      betterUseComputed: ["dore", "remi", "mifa", "faso", "sola"]
    };
  },
  filters: {
    toUpper(data) {
      return data.toUpperCase();
    }
  },
  computed: {
    filterElements() {
      return this.betterUseComputed.filter(element =>
        element.match(this.iText)
      );
    }
  }
};
</script>

<style>
</style>
