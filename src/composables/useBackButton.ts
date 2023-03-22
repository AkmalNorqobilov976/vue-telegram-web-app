import { onMounted, onUnmounted, ref } from "vue"

export const useBackButton = () => {
    const WebApp = typeof window !== 'undefined' ? window?.Telegram.WebApp : null;
    const WebAppBackButton = WebApp?.BackButton;
    const BackButton = ref({
        show: false
    })
    const onShowHideBackButton = (value: boolean) => {
        BackButton.value.show = value;
        if(BackButton.value.show) {
            WebAppBackButton.show();
        } else {
            WebAppBackButton.hide();
        }
    }

    const onBackButtonClick = (cb: any) => {
        onMounted(() => {
            WebAppBackButton.onClick(cb)
        })

        onUnmounted(() => {
            onMounted(() => {
                WebAppBackButton.onClick(cb)
            })
        })
    }
    return {
        BackButton,
        onShowHideBackButton,
        onBackButtonClick
    }
}