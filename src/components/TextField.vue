<template>
    <input class="input" :placeholder="label"/>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        label: {
            type: String
        }
    }
})
</script>
<style lang="scss" scoped>
$blue: rgb(0, 204, 255);
    .input {
        width: 100%;
        background: $blue;
        border-radius: 8px;
        font-size: 18px;
        border: none;
        outline: none;
        padding: 5px 10px;
        margin: 5px 0;
        transition: .2s all ease;
        background: white;
        border: #2b2b2b 2px solid;
        &:focus {
            border: rgba($color: $blue, $alpha: .6) 2px solid;
        }
    }
</style>