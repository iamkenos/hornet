import path from "path";

import { merge } from "lodash";
import { Intersect, logger } from "@core/common";
import { ComponentMetaData, PageMetaData } from "@core/generics";

export function getDataByLocale<T extends PageMetaData | ComponentMetaData>(meta: T, locale?: string) {
  const data = merge({}, meta["default"], meta[locale || browser.config.locale]);
  return data as Intersect<T[keyof T]> & T[keyof T];
}

export function getProperty<T = string>(basename: string, ...propTree: string[]) {
  const { config } = browser;
  const file = config.metadata.find((file) => path.basename(file).split(".")[0].toLowerCase() === basename.toLowerCase());

  if (!file) {
    throw new Error(`\n  Unable to resolve "${basename}" from any of the available metadata files: 
    ${config.metadata.map((i) => i).join(",\n")}`);
  }

  const metadata = getDataByLocale(require(file).default); // eslint-disable-line
  return propTree.reduce((i, j): object => (i && i[j] ? i[j] : null), metadata) as T;
}

export function getUrl(basename: string) {
  const { runtime } = browser.config;
  const metafile = basename || runtime.activeMeta;
  return getProperty(metafile, "url");
}

export function getTitle(basename: string) {
  const { runtime } = browser.config;
  const metafile = basename || runtime.activeMeta;
  return getProperty(metafile, "title");
}

export function getLabels(basename: string) {
  const { runtime } = browser.config;
  const metafile = basename || runtime.activeMeta;
  return getProperty<Object>(metafile, "labels");
}

export function getLabel(basename: string, label: string) {
  try {
    return getLabels(basename)[label] || label;
  } catch (e) {
    return label;
  }
}

export function getSelector(basename: string, selectorKey: string): string {
  const { runtime } = browser.config;
  const metafile = basename || runtime.activeMeta;
  const metafileSelectorKey = selectorKey || runtime.activeMetaSelectorKey;
  const stitch = (file: string, selectorKey: string) => {
    let resolved: string;
    try {
      const root = "selectors";
      const delimiter = />->/;
      const matches = selectorKey.split(delimiter).filter(Boolean); // additional `filter` to remove empty values
      if (matches && matches.length > 1) {
        resolved = matches.map(selectorKey => getProperty(file, root, selectorKey)).join("");
      } else {
        resolved = getProperty(file, root, selectorKey);
      }
    } catch (e: any) {
      logger.warn(e.message);
    } finally {
      return resolved || selectorKey;
    }
  };
  let selector = metafileSelectorKey;

  if (metafile && metafileSelectorKey) {
    selector = stitch(metafile, metafileSelectorKey);
  }

  return selector;
}

export function getMergedMetaData
<T extends PageMetaData | ComponentMetaData, U, V, W, X, Y, Z>(m1: T, m2: U, m3?: V, m4?: W, m5?: X, m6?: Y, m7?: Z):
T & U & V & W & X {
  return merge({}, m1, m2, m3, m4, m5, m6, m7);
}
