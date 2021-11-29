import { merge } from "lodash";
import { PageMetaData, ComponentMetaData, Intersect } from "@core/generics/types";

export function getMetaProperties<T extends PageMetaData | ComponentMetaData>(meta: T, locale?: string) {
  const object = merge({}, meta["default"], meta[locale || browser.config.locale]);
  return object as Intersect<T[keyof T]> & T[keyof T];
}
