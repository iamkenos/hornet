import { Intersect } from "@hornet/core/common";
import { MetaAdapter } from "@hornet/core/generics";
import { WebElement } from "./WebElement";
import type { ComponentMetadata } from "./types";

export abstract class WebComponent<T extends ComponentMetadata> extends WebElement {
  public readonly properties: Intersect<T[keyof T]> & T[keyof T];

  public readonly labels: Intersect<T[keyof T]["labels"]>;

  public readonly selectors: Intersect<T[keyof T]["selectors"]>;

  public readonly root: keyof Intersect<T[keyof T]["selectors"]>;

  public readonly tag: string;

  public readonly declare parent: string;

  public constructor(tag: keyof Intersect<T[keyof T]["selectors"]>, meta: T, parent = "", locale?: string) {
    super(parent);
    this.tag = tag as string;
    this.parent = parent;
    this.properties = MetaAdapter.getProperties(meta, locale);
    this.selectors = this.properties.selectors as any;
    this.labels = this.properties.labels;
    this.root = this.selectors[tag] as any;
    this.selector = this.selector as string + this.root;
  }
}
