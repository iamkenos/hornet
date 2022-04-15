import { Intersect } from "@core/common";
import { getDataByLocale } from "@core/generics";
import type { PageMetaData } from "./types";

export abstract class WebPage<T extends PageMetaData> {
  protected properties: Intersect<T[keyof T]> & T[keyof T];

  protected url: string;

  protected title: string;

  protected labels: Intersect<T[keyof T]["labels"]>;

  protected selectors: Intersect<T[keyof T]["selectors"]>;

  public constructor(meta: T, locale?: string) {
    this.properties = getDataByLocale(meta, locale);
    this.url = this.properties.url || "";
    this.title = this.properties.title || "";
    this.labels = this.properties.labels as any;
    this.selectors = this.properties.selectors as any;
  }

  public async navigate() {
    await driver.url(this.url);
  }

  public getTitle() {
    return this.title;
  }

  public getUrl() {
    return this.url;
  }

  public async thenTitleEquals(not?: boolean) {
    const then = await browser.conditions();
    await then.titleEquals(this.title, not).expect();
  }

  public async thenUrlEquals(not?: boolean) {
    const then = await browser.conditions();
    await then.urlEquals(this.url, not).expect();
  }
}
