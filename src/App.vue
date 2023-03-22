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
        <TextField @input="onSetText($event.target.value)" :label="'Main Button Text'" />
        <p class="mt-5">Background color</p>
        <TextField type="color" value="#fff" @input="onSetColor($event.target.value)" />
        <p class="mt-5">Text color</p>
        <TextField type="color" value="#fff" @input="onSetTextColor($event.target.value)" />
        <Btn @click="onShowHideBackButton(!BackButton.show)">
            {{ BackButton.show
                ? 'Hide Back Button'
                : 'Show Back Button'
            }} </Btn>

        <VueSelect v-model="hapTick.style" class="mt-5 select" placeholder="Impact Occured"
            :options="['light', 'medium', 'heavy', 'rigid', 'soft']"></VueSelect>
        <Btn @click="onImpactOccured(hapTick.style)">
            Impact Occured </Btn>
        <VueSelect v-model="hapTick.type" class="mt-5 select" placeholder="Notification Occurred"
            :options="['error', 'success', 'warning']"></VueSelect>
        <Btn @click="onNotificationOccurred(hapTick.type)">
            Notification Occurred </Btn>

        <Btn @click="useShowPopup()({
            title: 'title',
            message: 'Message of Popup',
            buttons: [
                { id: 'yes', text: 'Yes', type: 'ok' },
                { id: 'no', text: 'No', type: 'cancel' },
                { id: 'default', text: 'Default', type: 'default' }
            ],
        })">Show Popup </Btn>


        <Btn @click="() =>
            showQrPopup(
                {
                    text: 'Showed Qr Scaner Popup',
                },
                text => {
                    closeQrPopup();
                    useShowPopup()({
                        message: text,
                    });
                },
            )">Show Qr Scanner Popup </Btn>

    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Btn from './components/Btn.vue';
import { useMainButton } from '@/composables/useMainButton';
import { useBackButton } from '@/composables/useBackButton';
import useShowPopup from '@/composables/useShowPopup';
import useScanQRPopup from '@/composables/useScanQRPopup'
import { StyleType, TypeType, useHapTickFeedback } from '@/composables/useHapTickFeedback'
import TextField from './components/TextField.vue';

export default defineComponent({
    name: "App",
    components: { Btn, TextField },
    setup() {

        // const hapTickNotificationOccurredType = ref(<Parameters<NotificationOccurredFunction>[0]>('error'));
        // const hapTickImpactOccurredFunctionStyle = ref(<Parameters<ImpactOccurredFunction>[0]>('light'))

        const hapTick = reactive({
            type: 'error' as TypeType,
            style: 'light' as StyleType
        });

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
            onShowHideBackButton,
            onBackButtonClick
        } = useBackButton()

        const {
            onImpactOccured,
            onNotificationOccurred
        } = useHapTickFeedback();

        onBackButtonClick(() => {
            alert('Backbutton clicked')
        });

        const [showQrPopup, closeQrPopup] = useScanQRPopup();
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
            onShowHideBackButton,
            // hapTick feedback

            onImpactOccured,
            onNotificationOccurred,
            hapTick,


            // popup
            useShowPopup,

            // Scan QR popup
            showQrPopup,
            closeQrPopup

        }
    }
})
</script>

<style lang="scss">
$blue: rgb(0, 204, 255);

#app {
    padding: 0 10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 20px 0;

    .mt-5 {
        margin-top: 20px;
    }

    .select {
        width: 100%;
        border-radius: 8px;
        font-size: 18px;
        border: none;
        outline: none;
        padding: 5px 10px;
        transition: .2s all ease;
        background: white;
        border: $blue 2px solid;

        &:focus {
            border: rgba($color: $blue, $alpha: .4) 2px solid;
        }
    }
}
</style>
