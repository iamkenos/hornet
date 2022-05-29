import type { Selector } from "webdriverio";
import { JS_GET_ABSOLUTE_XPATH } from "@commands";
import { ElementConditions } from "@conditions";
import { XPathBuilder } from "@generics/utils";

export class WebElement {
  public readonly parent: string;
  public selector: string;

  public constructor(selector: Selector) {
    this.selector = selector as string;
    this.parent = "";
  }

  public $(index?: number) {
    if (index > 0) {
      return this.$$()[index];
    } else {
      return $(this.selector);
    }
  }

  public $$() {
    return $$(this.selector);
  }

  public getByIndexedXPath<T extends WebElement>(index: number, Sub?: new (parent: string) => T) {
    const selector = new XPathBuilder(this.selector).build(index);
    const instance = Sub ? new Sub(this.parent) : new WebElement(selector) as any;
    instance.selector = selector;
    return instance as T;
  }

  public async getByAbsoluteXPath(index?: number) {
    await (await this.conditions(index)).exists().expect();
    const element = await this.$(index);
    const xpath = await browser.execute<string, any>(JS_GET_ABSOLUTE_XPATH, element);
    return new WebElement(xpath);
  }

  public async getTextArray() {
    const elements = await this.$$();
    const getText = async(element: WebdriverIO.Element) => await element.getText();
    return await Promise.all(elements.map((element) => getText(element)));
  }

  public async conditions(index?: number) {
    return new ElementConditions(await this.$(index));
  }
}
