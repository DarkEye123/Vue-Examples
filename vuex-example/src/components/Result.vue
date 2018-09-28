<template>
    <div class="row">
        <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-4 offset-md-4">
            <p>count is {{doubleCounter}}</p>
            <p>There is {{stringCounter}}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: { ...mapGetters(["doubleCounter", "stringCounter"]) }
};
</script>

