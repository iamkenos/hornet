import type { MoveToOptions } from "webdriverio";
import type { ClickPointerOrigin, ClickWith, Coordinates, HttpRequestOptions, HttpResponse } from "./commands";
import type { KeyValuePair } from "./common";
import type { BrowserConditions, ExpectedConditions } from "./conditions";
import type { Config as Custom } from "./config";

declare global {
  // eslint-disable-next-line
  namespace WebdriverIO {
    interface Browser {
      config: Custom;
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
      sendRequest: (url: string, options?: HttpRequestOptions, delay?: { pre?: number; post?: number }) => Promise<HttpResponse>;
      setCookie: (name: string, value: string) => Promise<void>;
      setLocalStorageItem: (kvp: KeyValuePair) => Promise<void>;
      setSessionStorageItem: (kvp: KeyValuePair) => Promise<void>;
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
      getTextAll: () => Promise<string[]>;
      moveIntoView: (options?: MoveToOptions) => Promise<void>;
      sendKeys: (keys: string | string[]) => Promise<void>;
      setAttribute: (kvp: KeyValuePair) => Promise<void>;
      uploadFile: (filepath: string) => Promise<void>;
    }
  }
}
