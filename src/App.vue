<template>
    <div>
        {{ MainButton }}
        <Btn @click="onShowHide(!MainButton.show)"> {{ MainButton.show ? 'Hide Main Button' : 'Show Main Button' }} </Btn>
        <Btn @click="onSetProgress(!MainButton.progress)"> {{ MainButton.progress ? 'Hide Main Button Progress' : 'Show Main Button Progress' }} </Btn>
        <Btn @click="onDisable(!MainButton.disable)"> {{ MainButton.disable ? 'Disable Main' : 'Enable Main Button' }} </Btn>
    </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import Btn from './components/Btn.vue';
import { useMainButton } from './components/useMainButton';

export default defineComponent({
    name: "App",
    components: { Btn },
    setup() {
        const { MainButton, onShowHide, onDisable, onSetProgress } = useMainButton();
        watch(MainButton, (newValue) => {
            console.log(newValue);
            
        })

        return {
            MainButton,
            onShowHide,
            onDisable, 
            onSetProgress
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
