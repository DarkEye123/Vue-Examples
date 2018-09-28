<template>
    <div class="row">
        <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-4 offset-md-4">
            <button class="btn btn-primary mr-3" @click="increment">increase</button>
            <button class="btn btn-primary" @click="decrement">decrease</button>
        </div>
        <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-4 offset-md-4 mt-3">
            <button class="btn btn-primary mr-3" @click="incrementAsync">increase async</button>
            <button class="btn btn-primary" @click="decrementAsync">decrease async</button>
        </div>
        <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-4 offset-md-4 mt-3">
            <!-- <input type="text" class="form-control" placeholder="input value" :value="value" @input="valueAction"> -->
            <input type="text" class="form-control" placeholder="input value" v-model="value">
        </div>
        </div>
</template>

<script>
// import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        console.log("test", value);
        this.$store.dispatch("value", value);
      }
    }
  },
  methods: {
    ...mapActions([
      "increment",
      "decrement",
      "incrementAsync",
      "decrementAsync"
    ])
    // ...mapActions({ valueAction: "value" }),
    // ...mapGetters(["value"])
  }
};
</script>



