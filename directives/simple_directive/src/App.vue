<template>
  <div id="app">
    <p v-highlight>my own directive</p>
    <p v-highlight="'red'">my own directive with value</p>
    <p v-highlight:textColor="'red'">my own directive with argument</p>
    <p v-highlight:textColor.delayed="'lightblue'">my own directive with argument and modifier</p>
    <p v-local-highlight:textColor.delayed.blink="'orange'">my own LOCAL directive with argument and modifiers</p>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 1000;
        }
        if (binding.modifiers["blink"]) {
          let currentColor = binding.value;
          let nextColor = 'red';
          let previousColor = currentColor;
          el.style.color = currentColor;
          setInterval(() => {
            currentColor = currentColor == nextColor ? previousColor : nextColor;
            el.style.color = currentColor;
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "textColor") {
              el.style.color = binding.value;
            } else {
              if (!binding.value) {
                el.style.backgroundColor = "lightgreen";
              } else {
                el.style.backgroundColor = binding.value;
              }
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style>
</style>
