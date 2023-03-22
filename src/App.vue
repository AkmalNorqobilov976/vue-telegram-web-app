<template>
    <div>
        {{ MainButton }}
        <Btn @click="onShowHide(!MainButton.show)"> {{ MainButton.show ? 'Hide Main Button' : 'Show Main Button' }} </Btn>
        <Btn @click="onShowHideProgress(!MainButton.progress)"> {{ MainButton.progress }} </Btn>
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
        const { MainButton, onShowHide, onShowHideProgress } = useMainButton();
        watch(MainButton, (newValue) => {
            console.log(newValue);
            
        })

        return {
            MainButton,
            onShowHide,
            onShowHideProgress
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
