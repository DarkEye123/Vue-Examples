<template>
  <div>
    <div id="on" :class="{active: value == 'on'}" @click="switchValue('on')">
      on
    </div>

    <div id="off" :class="{active: value != 'on'}" @click="switchValue('off')">
      off
    </div>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    methods: {
      switchValue(val) {
        this.$emit("input", val);
        console.log(this.value, val);
      }
    },
  }
</script>

<style scoped>
  #on, #off {
    width: 40px;
    height: 20px;
    display: inline-block;
    margin: 10px -1px;
    background-color: whitesmoke;
    text-align: center;
    border: 1px solid black;
    cursor: pointer;
    padding: 2px;
  }
  #on:hover, #on.active {
    background-color: lightgreen;
  }

  #off:hover, #off.active {
    background-color: lightcoral;
  }
</style>
