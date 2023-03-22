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
    });

    const onToggleDisable = (value: boolean) => {
        MainButton.value.show = value;
        console.log(MainButton.value.show);
        if (WebAppMainButton.isActive && MainButton.value.disable) {
        } else if (!WebAppMainButton.isActive && !MainButton.value.disable) {
            WebAppMainButton.enable();
        }
    }
    return {
        MainButton,
        onToggleDisable
    }
}