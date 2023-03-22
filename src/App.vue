<template>
    <div>
        <Btn @click="MainButton.disable = !MainButton.disable"> {{ MainButton.disable }} </Btn>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Btn from './components/Btn.vue';
import { useMainButton } from './components/useMainButton';

export default defineComponent({
    name: "App",
    components: { Btn },
    setup() {
        const { MainButton } = useMainButton();


        return {
            MainButton
        }
    }
})
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
