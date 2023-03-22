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
        console.log(MainButton.value.show);
        if (MainButton.value.disable) {
            WebAppMainButton.show();
        } else {
            WebAppMainButton.hide();
        }
    }

    const onSetProgress = (value: boolean) => {
        MainButton.value.progress = value;
        if (!WebAppMainButton.isProgressVisible && MainButton.value.progress) {
            WebAppMainButton.showProgress(false);
          } else if (WebAppMainButton.isProgressVisible && !MainButton.value.progress) {
            WebAppMainButton.hideProgress();
          }
    }

    const onDisable = (value: boolean) => {
        MainButton.value.disable = value;
        if (WebAppMainButton.isActive && MainButton.value.disable) {
            WebAppMainButton.disable();
          } else if (!WebAppMainButton.isActive && !MainButton.value.disable) {
            WebAppMainButton.enable();
          }
    }
    return {
        MainButton,
        onShowHide,
        onSetProgress,
        onDisable
    }
}