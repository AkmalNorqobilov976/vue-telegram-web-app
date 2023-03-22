import { MainButtonProps } from "@/interfaces/MainButtonProps"
import { ref, watch } from "vue"

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
    watch(MainButton.value?.color, (newValue) => {
        WebAppMainButton.color = newValue;
    });

    watch(MainButton.value.disable, (newValue) => {
        WebAppMainButton.disable = newValue;
    })

    watch(MainButton.value.progress, (newValue) => {
        WebAppMainButton.progress = newValue;
    });

    
    watch(MainButton.value.textColor, (newValue) => {
        WebAppMainButton.textColor = newValue;
    });

    return {
        MainButton
    }
}