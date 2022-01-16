import type { Response as R } from "got";

import type { ClickOptions, MoveToOptions } from "webdriverio";

export type { OptionsOfTextResponseBody as HttpRequestOptions } from "got";

export type { DragAndDropCoordinate as Coordinates } from "webdriverio";

export type ClickPointerOrigin = "pointer" | "viewport" | WebdriverIO.Element;

export type ClickWith = ClickOptions & { button: "left" | "middle" | "right" | "script"; move?: MoveToOptions };

export type KVP = { key: string; value: string };

export type HttpResponse = R<string> & {
  /** The time in ms taken to get the response */
  time: number;
  /** The request object */
  request: R["request"] & { body?: any };
};
