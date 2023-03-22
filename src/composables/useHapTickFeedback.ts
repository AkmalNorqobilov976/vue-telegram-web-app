export type StyleType = 'light' | 'medium' | 'heavy' | 'rigid' | 'soft';
export type TypeType = 'error' | 'success' | 'warning'
export type ImpactOccurredFunction = (
    style: StyleType
) => void;

export type NotificationOccurredFunction = (
    type: TypeType
) => void;

export const useHapTickFeedback =  () => {


    const onImpactOccured: ImpactOccurredFunction = style => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred(style);
    }

    const onNotificationOccurred: NotificationOccurredFunction = type => {
        window.Telegram.WebApp.HapticFeedback.notificationOccurred(type);
    }

    return {
        onNotificationOccurred,
        onImpactOccured
    }
}