<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button class="btn btn-primary" @click="navigateToHome">Take me Home</button>
        <hr>
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
