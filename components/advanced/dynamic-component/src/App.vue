<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-6 mx-auto">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <p>{{ selectedComponent }}</p>
        <component :is="selectedComponent" v-bind:title="title">
          <p>Default Body</p>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote";
import New from "./components/New";
import Author from "./components/Author";
export default {
  data() {
    return {
      title: "A wonderful quote!",
      selectedComponent: 'appQuote'
    };
  },
  components: {
    appQuote: Quote,
    appNew: New,
    appAuthor: Author
  }
};
</script>

<style scoped>
</style>
