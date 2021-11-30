import type { Response as R } from "got";

export type { OptionsOfTextResponseBody as HttpRequestOptions } from "got";

export type { DragAndDropCoordinate as Coordinates } from "webdriverio";

export type ClickPointerOrigin = "pointer" | "viewport" | WebdriverIO.Element;

export type HttpResponse = R<string> & {
  /** The time in ms taken to get the response */
  time: number;
  /** The request object */
  request: R["request"] & { body?: any };
};

export interface CustomConfig {
  locale: string;
}
