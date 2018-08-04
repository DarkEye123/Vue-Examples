<template>
    <div>
        <div class=title>
            <slot name="titledSlot"></slot>
        </div>
        <hr>
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    
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
    .title {
        font-style: italic
    }
</style>

