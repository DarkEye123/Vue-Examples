<template>
  <div id="app">
    <app-switcher v-model="switcherValue"></app-switcher>
    <hr>
    <p>{{switcherValue}}</p>
  </div>
</template>

<script>
  import Switcher from './components/Switcher';
  export default {
    data() {
      return {
        switcherValue: 'off',
      }
    },
    components: {
      appSwitcher: Switcher,
    }
  }
</script>

<style>
</style>
