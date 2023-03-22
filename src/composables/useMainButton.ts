import { MainButtonProps } from "@/interfaces/MainButtonProps"
import { ref, watch, watchEffect } from "vue"

export const useMainButton = () => {
    const WebApp = typeof window !== 'undefined' ? window?.Telegram.WebApp : null;
    const WebAppMainButton = WebApp?.MainButton;
    const MainButton = ref<MainButtonProps>({
        text: 'CONTINUE',
        progress: false,
        disable: false,
        color: (WebApp.color as string),
        textColor: WebApp.textColor,
        onClick: WebApp.onClick,
        show: false
    });

    const onShowHide = (value: boolean) => {
        WebAppMainButton.enable();
        MainButton.value.show = value;
        // WebAppMainButton.disable();
        // if (MainButton.value.show) {
        // } else if (!MainButton.value.show) {
        // }
    }
    return {
        MainButton,
        onShowHide
    }
}