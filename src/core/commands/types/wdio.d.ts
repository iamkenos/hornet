import type { MoveToOptions } from "webdriverio";
import type { Config as Custom } from "@core/config";
import type { ExpectedConditions } from "@core/conditions";
import type {
  HttpRequestOptions,
  HttpResponse,
  ClickWith,
  ClickPointerOrigin,
  Coordinates,
  KVP
} from "./";

declare global {
  namespace WebdriverIO {
    interface Config extends Partial<Custom> {}

    interface Browser {
      config: Config & Custom;
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
      setLocalStorageItem: (kvp: KVP) => Promise<void>;
      setSessionStorageItem: (kvp: KVP) => Promise<void>;
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
      moveIntoView: (options: MoveToOptions) => Promise<void>;
      sendKeys: (keys: string | string[]) => Promise<void>;
      setAttribute: (kvp: KVP) => Promise<void>;
    }
  }
}

export {};
