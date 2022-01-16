import { getMetaProperties } from "@core/utils";
import type { PageMetaData, Intersect } from "./types";

export abstract class WebPage<T extends PageMetaData> {
  protected properties: Intersect<T[keyof T]> & T[keyof T];

  protected url: string;

  protected title: string;

  protected labels: Intersect<T[keyof T]["labels"]>;

  protected selectors: Intersect<T[keyof T]["selectors"]>;

  public constructor(meta: T, locale?: string) {
    this.properties = getMetaProperties(meta, locale);
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

  public async assertTitle(preferred?: boolean) {
    preferred
      ? await expect(browser.getTitle()).toEqual(this.title)
      : await expect(browser).not.browserTitleToBeEqual(this.title);
  }

  public async assertUrl(preferred?: boolean) {
    preferred
      ? await expect(browser).browserUrlToBeEqual(this.url)
      : await expect(browser).not.browserUrlToBeEqual(this.url);
  }
}
