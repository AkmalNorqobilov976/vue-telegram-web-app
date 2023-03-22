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
    watch(MainButton.value?.color, (newValue) => {
        WebAppMainButton.color = newValue;
    });


    watch(MainButton.value.progress, (newValue) => {
        WebAppMainButton.progress = newValue;
    });



    watch(MainButton.value.textColor, (newValue) => {
        WebAppMainButton.textColor = newValue;
    });

    const onToggleDisable = (value: boolean) => {
        MainButton.value.disable = value;
        WebAppMainButton.disable = value;
        if (WebAppMainButton.isActive && MainButton.value.disable) {
            WebAppMainButton.setParams({
                is_active: MainButton.value.disable
            });
        } else if (!WebAppMainButton.isActive && !MainButton.value.disable) {
            WebAppMainButton.enable();
        }
    }
    return {
        MainButton,
        onToggleDisable
    }
}