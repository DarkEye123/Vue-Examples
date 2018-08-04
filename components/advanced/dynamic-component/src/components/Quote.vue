<template>
    <div>
        <h1>{{ title }}</h1>
        <slot></slot>
    </div>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px 10em auto;
        text-align: center;
    }
    /* h1 is given in the parent */
    h1 {
        color: red
    }
</style>

