export interface ShowPopupButton extends Record<string, unknown> {
    id: string;
    type: 'default' | 'ok' | 'close' | 'cancel' | 'destructive' | string;
    text: string;
}

export interface ShowPopupParams extends Record<string, unknown> {
    title?: string;
    message: string;
    buttons?: ShowPopupButton[];
}

export type ShowPopupFunction = (params: ShowPopupParams) => Promise<string>;

const useShowPopup: () => ShowPopupFunction = () => params =>
        new Promise((resolve, reject) => {
            try {
                window.Telegram.WebApp.showPopup(params, (buttonId: string) => {
                    resolve(buttonId);
                });
            } catch (e) {
                reject(e);
            }
        })

export default useShowPopup;