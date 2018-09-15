<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <button class="btn btn-primary mb-3" @click="navigateToHome">Take me Home</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push("/"); //accepts also {path: "/"}
    }
  }
};
</script>
