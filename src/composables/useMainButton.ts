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
        MainButton.value.show = value;
        if (MainButton.value.show) {
            WebAppMainButton.show();
        } else if (!MainButton.value.show) {
            WebAppMainButton.hide();
        }
    }


    const onShowHideProgress = (value: boolean) => {
        MainButton.value.progress = value;
        if (MainButton.value.progress) {
            WebAppMainButton.showProgress(false);
        } else if (!MainButton.value.progress) {
            WebAppMainButton.hideProgress();
        }
    }
    return {
        MainButton,
        onShowHide,
        onShowHideProgress
    }
}