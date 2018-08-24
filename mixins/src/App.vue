<template>
  <div id="app">
    <p>locally registered mixin in the App</p>
    <input v-model="iText" placeholder="type for filtering">
    <ul>
      <li v-for="(element, index) in filterElements" :key=index>{{element}}</li> 
    </ul>
    <hr>
    <p>Example of component using the same mixin</p>
    <!-- data are not mixed, component has their own copy-->
    <app-filter></app-filter>
  </div>
</template>

<script lang="ts">
import filterMixin from "./mixins/filter.js";
import AppFilter from "./components/Filter.vue";
export default {
  name: "app",
  mixins: [filterMixin],
  data() {
    return {
      iText: ""
    };
  },
  components: {
    AppFilter
  }
};
</script>

<style>
</style>
