<template>
    <button class="btn">
        <slot>{{ label }}</slot>
    </button>
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
    .btn {
        width: 100%;
        background: $blue;
        border-radius: 8px;
        color: white;
        font-size: 18px;
        border: none;
        outline: none;
        padding: 5px 10px;
        transition: .2s all ease;
        &:hover {
            background: rgba($color: $blue, $alpha: .6);
        }

        &:active {
            background: white;
            color: $blue;
            border: $blue 2px solid;
        }
    }
</style>