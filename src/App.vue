<template>
    <div id="app">
        {{ MainButton }}
        <Btn @click="onShowHide(!MainButton.show)"> {{ MainButton.show ? 'Hide Main Button' : 'Show Main Button' }} </Btn>
        <Btn @click="onShowHideProgress(!MainButton.progress)"> 
            {{ MainButton.progress 
                ? 'Hide Main Button Progress' 
                : 'Show Main Button Progress' 
            }} 
        </Btn>
        <Btn @click="onDisableEnable(!MainButton.disable)"> 
        {{ MainButton.disable 
            ? 'Enable Main Button' 
            : 'Disable Main Button' 
        }} </Btn>
        <TextField @input="onSetText($event.target.value)" :label="'Main Button Text'"/>
        <p class="mt-5">Background color</p>
        <TextField type="color" value="#fff" @input="onSetColor($event.target.value)" />
        <p class="mt-5">Text color</p>
        <TextField type="color" value="#fff" @input="onSetTextColor($event.target.value)" />
        <Btn @click="onShowHideBackButton(!BackButton.show)"> 
        {{ BackButton.show 
            ? 'Hide Back Button' 
            : 'Show Back Button' 
        }} </Btn>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import Btn from './components/Btn.vue';
import { useMainButton } from '@/composables/useMainButton';
import { useBackButton } from '@/composables/useBackButton';
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
            onSetText,
            onSetColor,
            onSetTextColor
         } = useMainButton();
         

         const { 
            BackButton,
            onShowHideBackButton 
        } = useBackButton()

        return {
            MainButton,
            onShowHide,
            onShowHideProgress,
            onDisableEnable,
            onSetText,
            onSetColor,
            onSetTextColor,

            // back button
            BackButton,
            onShowHideBackButton
        }
    }
})
</script>

<style lang="scss">
#app {
    padding: 0 10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 20px;
    .mt-5 {
        margin-top: 20px;
    }
}
</style>
