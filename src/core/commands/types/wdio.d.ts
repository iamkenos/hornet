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
      sendKeys: (keys: string | string[]) => Promise<void>;
    }
  }
}

export {};
