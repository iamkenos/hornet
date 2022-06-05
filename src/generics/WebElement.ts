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

  public async getByAbsoluteXPathAll() {
    const elements = await this.$$();
    const getXPath = async(element: WebdriverIO.Element) => await browser.execute<string, any>(JS_GET_ABSOLUTE_XPATH, element);
    const selectors = await Promise.all(elements.map((element) => getXPath(element)));
    return selectors.map(selector => new WebElement(selector));
  }

  public async getByAbsoluteXPath(index?: number) {
    const webelements = await this.getByAbsoluteXPathAll();
    return webelements[index > 0 ? index : 0];
  }

  public async conditions(index?: number) {
    return new ElementConditions(await this.$(index));
  }
}
