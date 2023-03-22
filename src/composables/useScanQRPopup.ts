export type ScanQrPopupCallback = (text: string) => true | void;
export interface ScanQrPopupParams {
  text: string;
}
export type ShowScanQrPopupFunction = (
  params: ScanQrPopupParams,
  callback?: ScanQrPopupCallback,
) => void;

export type CloseScanQrPopupFunction = () => void;

const showScanQrPopup: ShowScanQrPopupFunction = (params, callback) => {
  window.Telegram.WebApp.showScanQrPopup(params, callback);
};

const closeScanQrPopup: CloseScanQrPopupFunction = () => {
  window.Telegram.WebApp.closeScanQrPopup();
};
const useScanQrPopup = (): readonly [
  ShowScanQrPopupFunction,
  CloseScanQrPopupFunction,
] => [showScanQrPopup, closeScanQrPopup] as const;

export default useScanQrPopup;