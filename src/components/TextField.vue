<template>
    <div class="input">
        <input v-bind="$attrs" class="" :placeholder="label"/>
    </div>
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
        input {
            display: block;
            width: 100%;
            border-radius: 8px;
            font-size: 18px;
            border: none;
            outline: none;
            padding: 5px 10px;
            margin: 5px 0;
            transition: .2s all ease;
            background: white;
            border: $blue 2px solid;
            &:focus {
                border: rgba($color: $blue, $alpha: .4) 2px solid;
            }
        }
    }
</style>