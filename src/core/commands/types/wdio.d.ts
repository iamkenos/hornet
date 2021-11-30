import type { HttpRequestOptions, HttpResponse, ClickPointerOrigin, Coordinates, CustomConfig } from "./";

declare global {
  namespace WebdriverIO {
    interface Config extends Partial<CustomConfig> {}

    interface Browser {
      config: Config & CustomConfig;
      clearLocalStorage: () => Promise<void>;
      clearSessionStorage: () => Promise<void>;
      clickCoordinates: (target: Coordinates, origin: ClickPointerOrigin) => Promise<void>;
      closeLastWindow: () => Promise<void>;
      closeOtherWindows: () => Promise<void>;
      dragRelativeToPointer: (target: Coordinates, dragDuration: number) => Promise<void>;
      getLocalStorageItem: (key: string) => Promise<string>;
      getSessionStorageItem: (key: string) => Promise<string>;
      scrollTo: (target: Coordinates) => Promise<void>;
      scrollToBottom: () => Promise<void>;
      sendRequest: (utl: string, options?: HttpRequestOptions) => Promise<HttpResponse>;
      setCookie: (name: string, value: string) => Promise<void>;
      setLocalStorageItem: (key: string, value: string) => Promise<void>;
      setSessionStorageItem: (key: string, value: string) => Promise<void>;
      switchToLastWindow: () => Promise<void>;
      switchToParentWindow: () => Promise<void>;
    }

    interface Element {
      focus: () => Promise<void>;
      sendKeys: (keys: string | string[]) => Promise<void>;
    }
  }
}

export {};
