<template>
    <div>
        <h3>Some User Details</h3>
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
  }
};
</script>
