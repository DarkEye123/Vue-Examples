<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-center">
        <h1>Routing</h1>
        <!-- <app-header></app-header> -->
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <router-view name="view-top"></router-view>
        <router-view></router-view>
        <router-view name="view-bottom" class="mt-3"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header
  }
};
</script>

