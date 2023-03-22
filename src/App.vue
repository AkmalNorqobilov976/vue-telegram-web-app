<template>
    <div>
        {{ MainButton }}
        <Btn @click="onShowHide(!MainButton.show)"> {{ MainButton.show }} </Btn>
    </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import Btn from './components/Btn.vue';
import { useMainButton } from '@/composables/useMainButton';

export default defineComponent({
    name: "App",
    components: { Btn },
    setup() {
        const { MainButton, onShowHide } = useMainButton();
        watch(MainButton, (newValue) => {
            console.log(newValue);
            
        })

        return {
            MainButton,
            onShowHide
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
