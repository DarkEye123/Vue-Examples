<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button class="btn btn-primary" @click="navigateToHome">Take me Home</button>
        <p class="mt-3 text-right">Id from the URL: {{id}}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  watch: {
    // eslint-disable-next-line
    $route(to, from) {
      this.id = to.params.id; // this way if user with id=1 is selected and then user with id=2 id is updated(component is same, therefore id from initialization is not changed)
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push("/"); //accepts also {path: "/"}
    }
  }
};
</script>
