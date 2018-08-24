<template>
  <div>
    <input v-model="iText" placeholder="type for filtering">
    <ul>
      <li v-for="(element, index) in filterElements" :key=index>{{element}}</li> 
    </ul>
  </div>
</template>

<script lang="ts">
import filterMixin from "../mixins/filter.js";
export default {
  name: "app",
  mixins: [filterMixin],
  data() {
    return {
      iText: ""
    };
  }
};
</script>

<style>
</style>
