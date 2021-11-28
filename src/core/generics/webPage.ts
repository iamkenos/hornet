import { getMetaProperties } from "@core/utils";
import { PageMetaData, Intersect } from "./types";

export abstract class WebPage<T extends PageMetaData> {
  protected properties: Intersect<T[keyof T]> & T[keyof T];

  protected url: string;

  protected title: string;

  protected labels: Intersect<T[keyof T]["labels"]>;

  protected locators: Intersect<T[keyof T]["locators"]>;

  public constructor(meta: T, locale?: string) {
    this.properties = getMetaProperties(meta, locale);
    this.url = this.properties.url || "";
    this.title = this.properties.title || "";
    this.labels = this.properties.labels as any;
    this.locators = this.properties.locators as any;
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
    await driver.assertTitleEquals(this.title, preferred);
  }

  public async assertUrl(preferred?: boolean) {
    await driver.assertUrlEquals(this.url, preferred);
  }
}
