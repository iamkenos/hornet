import { Intersect } from "@core/common";
import { getDataByLocale } from "@core/generics";
import { WebElement } from "./webElement";
import type { ComponentMetaData } from "./types";

export abstract class WebComponent<T extends ComponentMetaData> extends WebElement {
  public readonly properties: Intersect<T[keyof T]> & T[keyof T];

  public readonly labels: Intersect<T[keyof T]["labels"]>;

  public readonly selectors: Intersect<T[keyof T]["selectors"]>;

  public readonly root: keyof Intersect<T[keyof T]["selectors"]>;

  public readonly tag: string;

  public readonly parent: string;

  public constructor(tag: keyof Intersect<T[keyof T]["selectors"]>, meta: T, parent = "", locale?: string) {
    super(parent);
    this.properties = getDataByLocale(meta, locale);
    this.root = getDataByLocale<any>(meta, locale).selectors[tag];
    this.tag = tag as string;
    this.parent = parent;
    this.selector = this.selector + this.root;
    this.labels = this.properties.labels;
    this.selectors = this.properties.selectors as any;
  }
}
