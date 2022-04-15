import type { MoveToOptions } from "webdriverio";
import type { KVP } from "@core/common";
import type { BrowserConditions, ExpectedConditions } from "@core/conditions";
import type { CustomConfig } from "@core/config";
import type { HttpRequestOptions, HttpResponse, ClickWith, ClickPointerOrigin, Coordinates } from "./";

declare global {
  namespace WebdriverIO {
    interface Config extends Partial<CustomConfig> {}

    interface Browser {
      config: Config & CustomConfig;
      clean: () => Promise<void>;
      clearLocalStorage: () => Promise<void>;
      clearSessionStorage: () => Promise<void>;
      clickCoordinates: (target: Coordinates, origin: ClickPointerOrigin) => Promise<void>;
      closeLastWindow: () => Promise<void>;
      closeOtherWindows: () => Promise<void>;
      conditions: () => Promise<BrowserConditions>;
      dragRelativeToPointer: (target: Coordinates, dragDuration: number) => Promise<void>;
      getLocalStorageItem: (key: string) => Promise<string>;
      getSessionStorageItem: (key: string) => Promise<string>;
      restoreWindowSize: () => Promise<void>;
      scrollTo: (target: Coordinates) => Promise<void>;
      scrollToBottom: () => Promise<void>;
      scrollToTop: () => Promise<void>;
      sendRequest: (url: string, options?: HttpRequestOptions) => Promise<HttpResponse>;
      setCookie: (name: string, value: string) => Promise<void>;
      setLocalStorageItem: (kvp: KVP) => Promise<void>;
      setSessionStorageItem: (kvp: KVP) => Promise<void>;
      storeWindowSize: () => Promise<void>;
      switchToLastWindow: () => Promise<void>;
      switchToParentWindow: () => Promise<void>;
    }

    interface Element {
      clickUntil: (conditions: ExpectedConditions, options?: ClickWith) => Promise<void>;
      clickWith: (options?: ClickWith) => Promise<void>;
      execute: (name: string) => Promise<void>;
      executeAsync: (name: string) => Promise<void>;
      focus: () => Promise<void>;
      getProperty: <T = string>(key: string) => Promise<T>; // type override
      moveIntoView: (options?: MoveToOptions) => Promise<void>;
      sendKeys: (keys: string | string[]) => Promise<void>;
      setAttribute: (kvp: KVP) => Promise<void>;
      uploadFile: (filepath: string) => Promise<void>;
    }
  }
}

export {};
