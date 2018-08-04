<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-6 mx-auto">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <h2>Destroyable components</h2>
        <p>{{ selectedComponent }}</p>
        <component :is="selectedComponent" v-bind:title="title">
          <p>Default Body</p>
        </component>
        <hr>
        <!-- Note that all is the same but components won't write to the log that they are destroyed -->
        <h2>Persistent components</h2>
        <keep-alive>
          <component :is="selectedComponent" v-bind:title="title">
            <p>Default Body of persistent component</p>
          </component>
        </keep-alive>
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
