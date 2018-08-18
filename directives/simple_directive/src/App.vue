<template>
  <div id="app">
    <p v-highlight>my own directive</p>
    <p v-highlight="'red'">my own directive with value</p>
    <p v-highlight:textColor="'red'">my own directive with argument</p>
    <p v-highlight:textColor.delayed="'lightblue'">my own directive with argument and modifier</p>
    <p v-local-highlight:textColor.blink="{color:'blue', delayed:1000}">my own LOCAL directive with argument and modifiers</p>
    <p v-local-highlight:textColor.blink="{tcolor:'lightcoral', delayed:500}">my own LOCAL directive with argument and modifiers</p>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        let delay = binding.value["delayed"] || 0;
        let currentColor = binding.value["color"] || "lightblue";
        let nextColor = binding.value["tcolor"] || 'red';
        el.style.color = currentColor;
        if (binding.modifiers["blink"]) {
          let previousColor = currentColor;
          setInterval(() => {
            currentColor =
              currentColor == nextColor ? previousColor : nextColor;
            el.style.color = currentColor;
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "textColor") {
              el.style.color = currentColor;
            } else {
              el.style.backgroundColor = binding.value;
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
