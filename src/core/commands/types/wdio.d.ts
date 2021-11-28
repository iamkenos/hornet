import type { DragAndDropCoordinate } from "webdriverio";
import type { OptionsOfTextResponseBody } from "got";
import type { CustomConditionFunction } from "@core/conditions/types";
import type { Response } from "@core/commands/browser/sendRequest";

interface CustomConfig {
  locale: string;
}

declare global {
  namespace WebdriverIO {
    interface Config extends Partial<CustomConfig> {}

    interface Browser {
      config: Config & CustomConfig;
      assertArrayContains: (actual: any[], expected: any[], preferred: boolean) => Promise<void>;
      assertArrayEquals: (actual: any[], expected: any[], preferred: boolean) => Promise<void>;
      assertCookieContains: (cookie: string, expected: string, preferred: boolean) => Promise<void>;
      assertCookieEquals: (cookie: string, expected: string, preferred: boolean) => Promise<void>;
      assertCookieExists: (cookie: string, preferred: boolean) => Promise<void>;
      assertCustomCondition: (condition: CustomConditionFunction, preferred: boolean) => Promise<void>;
      assertModalExists: (preferred: boolean) => Promise<void>;
      assertModalTextEquals: (expected: string, preferred: boolean) => Promise<void>;
      assertModalTextContains: (expected: string, preferred: boolean) => Promise<void>;
      assertPageIsReady: (preferred: boolean) => Promise<void>;
      assertTitleContains: (expected: string, preferred: boolean) => Promise<void>;
      assertTitleEquals: (expected: string, preferred: boolean) => Promise<void>;
      assertUrlContains: (expected: string, preferred: boolean) => Promise<void>;
      assertUrlEquals: (expected: string, preferred: boolean) => Promise<void>;
      assertUrlPathContains: (expected: string, preferred: boolean) => Promise<void>;
      assertUrlPathEquals: (expected: string, preferred: boolean) => Promise<void>;
      assertWindowCountEquals: (expected: number, preferred: boolean) => Promise<void>;
      assertWindowCountLessThan: (expected: number, preferred: boolean) => Promise<void>;
      assertWindowCountMoreThan: (expected: number, preferred: boolean) => Promise<void>;
      clickCoordinates: (target: DragAndDropCoordinate, origin: "pointer" | "viewport" | WebdriverIO.Element) => Promise<void>;
      closeLastWindow: () => Promise<void>;
      closeOtherWindows: () => Promise<void>;
      dragRelativeToPointer: (target: DragAndDropCoordinate, dragDuration: number) => Promise<void>;
      getLocalStorageItem: (key: string) => Promise<string>;
      getSessionStorageItem: (key: string) => Promise<string>;
      scrollTo: (target: DragAndDropCoordinate) => Promise<void>;
      scrollToBottom: () => Promise<void>;
      sendRequest: (utl: string, options?: OptionsOfTextResponseBody) => Promise<Response>;
      setCookie: (name: string, value: string) => Promise<void>;
      setLocalStorageItem: (key: string, value: string) => Promise<void>;
      setSessionStorageItem: (key: string, value: string) => Promise<void>;
      switchToLastWindow: () => Promise<void>;
      switchToParentWindow: () => Promise<void>;
    }

    interface Element {
      focus: () => Promise<void>;
      customCommand: () => Promise<void>;
      sendKeys: (keys: string | string[]) => Promise<void>;
    }
  }
}

export {};
