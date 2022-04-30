import type { Selector } from "webdriverio";
import { JS_GET_ABSOLUTE_XPATH } from "@commands";
import { ElementConditions } from "@conditions";
export class WebElement {
  public readonly parent: string;
  public selector: Selector;

  public constructor(selector: Selector) {
    this.selector = selector;
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

  public async byAbsoluteXPath(index?: number) {
    await (await this.conditions(index)).exists().expect();
    const element = await this.$(index);
    const xpath = await browser.execute<string, any>(JS_GET_ABSOLUTE_XPATH, element);
    return new WebElement(xpath);
  }

  public async conditions(index?: number) {
    return new ElementConditions(await this.$(index));
  }

  public async toTextArray() {
    const elements = await this.$$();
    const getText = async(element: WebdriverIO.Element) => await element.getText();
    return await Promise.all(elements.map((element) => getText(element)));
  }
}
