<template>
  <div>
    <h1 class="text-center">Welcome to Vuex example</h1>
    <div id="app" class="container">
      <hr>
      <counter></counter>
      <result></result>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter";
import Result from "./components/Result";
export default {
  components: {
    Counter,
    Result
  }
};
</script>

