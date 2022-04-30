import path from "path";

import merge from "lodash/merge";
import { Intersect, logger } from "@common";
import { ComponentMetadata, PageMetadata } from "@generics";

export abstract class MetaAdapter {
 
  /**
   * Get the resolved properties of a metadata
   * @param metadata the metadata object
   * @param locale the locale you want to get properties from; defaults to the default locale
   * @returns
   */
  public static getProperties<T extends PageMetadata | ComponentMetadata>(metadata: T, locale?: string) {
    const data = merge({}, metadata.default, metadata[locale || browser.config.locale]);
    return data as Intersect<T[keyof T]> & T[keyof T];
  }

  /**
   * Get the locale specific property value of a meta file, given its basename and a property tree
   * @param meta the basename of the meta file
   * @param proptree the series of property names that represents a top-to-bottom tree of the value you want to get
   * @returns
   */
  public static getPropertyValue<T = string>(meta: string, ...proptree: string[]) {
    const { config } = browser;
    const file = config.metadata.find(file => path.basename(file).split(".")[0].toLowerCase() === meta.toLowerCase());

    if (!file) {
      throw new Error(`\n  Unable to resolve "${meta}" from any of the available metadata files:
     ${config.metadata.map((i) => i).join(",\n")}`);
    }

    const properties = this.getProperties(require(file).default); // eslint-disable-line
    return proptree.reduce((i, j): object => (i && i[j] ? i[j] : null), properties) as T;
  }

  public static getUrl(meta: string) {
    const { runtime } = browser.config;
    return this.getPropertyValue(meta || runtime.activeMeta, "url");
  }

  public static getTitle(meta: string) {
    const { runtime } = browser.config;
    return this.getPropertyValue(meta || runtime.activeMeta, "title");
  }

  public static getLabels(meta: string) {
    const { runtime } = browser.config;
    return this.getPropertyValue<Object>(meta || runtime.activeMeta, "labels");
  }

  public static getLabel(meta: string, label: string) {
    try {
      return this.getLabels(meta)[label] || label;
    } catch (e) {
      return label;
    }
  }

  public static getSelector(meta: string, key: string) {
    const { runtime } = browser.config;
    const metafile = meta || runtime.activeMeta;
    const metafileSelectorKey = key || runtime.activeMetaSelectorKey;
    const stitch = (file: string, selectorKey: string) => {
      let resolved: string;
      try {
        const root = "selectors";
        const delimiter = />->/;
        const matches = selectorKey.split(delimiter).filter(Boolean); // additional `filter` to remove empty values
        if (matches && matches.length > 1) {
          resolved = matches.map(selectorKey => this.getPropertyValue(file, root, selectorKey)).join("");
        } else {
          resolved = this.getPropertyValue(file, root, selectorKey);
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

  public static merge<T extends PageMetadata | ComponentMetadata, U, V, W, X, Y, Z>(m1: T, m2: U, m3?: V, m4?: W, m5?: X, m6?: Y, m7?: Z) {
    return merge({}, m1, m2, m3, m4, m5, m6, m7) as T & U & V & W & X;
  }
}
