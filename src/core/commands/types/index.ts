import type { Response as R } from "got";
import type { ClickOptions, MoveToOptions } from "webdriverio";
import { ClickAction } from "@core/commands"

export type { OptionsOfTextResponseBody as HttpRequestOptions } from "got";

export type { DragAndDropCoordinate as Coordinates } from "webdriverio";

export type ClickPointerOrigin = "pointer" | "viewport" | WebdriverIO.Element;

export type ClickWith = ClickOptions & { button?: ClickAction; move?: MoveToOptions };

export type Size = { width: number; height: number; };

export type HttpResponse = R<string> & {
  /** The time in ms taken to get the response */
  time: number;
  /** The request object */
  request: R["request"] & { body?: any };
};
