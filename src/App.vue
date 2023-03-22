<template>
    <div>
        {{ MainButton }}
        <Btn @click="onShowHide(!MainButton.show)"> {{ MainButton.show ? 'Hide Main Button' : 'Show Main Button' }} </Btn>
        <Btn @click="onShowHideProgress(!MainButton.progress)"> 
            {{ MainButton.progress 
                ? 'Hide Main Button Progress' 
                : 'Show Main Button Progress' 
            }} </Btn>
            <Btn @click="onDisableEnable(!MainButton.disable)"> 
            {{ MainButton.disable 
                ? 'Disable Main Button' 
                : 'Enable Main Button' 
            }} </Btn>
            <TextField @input="onSetText($event.target.value)" :label="'Main Button Text'"/>

    </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import Btn from './components/Btn.vue';
import { useMainButton } from '@/composables/useMainButton';
import TextField from './components/TextField.vue';

export default defineComponent({
    name: "App",
    components: { Btn, TextField },
    setup() {
        const { 
            MainButton, 
            onShowHide, 
            onShowHideProgress,
            onDisableEnable,
            onSetText
         } = useMainButton();
        watch(MainButton, (newValue) => {
            console.log(newValue);
            
        })

        return {
            MainButton,
            onShowHide,
            onShowHideProgress,
            onDisableEnable,
            onSetText
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
