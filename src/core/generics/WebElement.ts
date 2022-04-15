import type { Selector } from "webdriverio";
import { JS_GET_ABSOLUTE_XPATH } from "@core/commands";
import { arrayFind, KVP } from "@core/common";
import { ElementConditions } from "@core/conditions";
import { SelectorBuilder } from "@core/generics";
export class WebElement {
  public readonly parent: string;
  public selector: Selector;

  public constructor(selector: Selector) {
    this.selector = selector;
    this.parent = "";
  }

  public get $() {
    return $(this.selector);
  }

  public get $$() {
    return $$(this.selector);
  }

  public get all() {
    return this.$$.map((elem, index) => new WebElement(new SelectorBuilder(elem.selector as string).build(index + 1)));
  }

  public async conditions() {
    return new ElementConditions(this.selector);
  }

  public async byAbsoluteXpath(descendant = "") {
    const element = await this.$;
    const xpath = await browser.execute<string, any>(JS_GET_ABSOLUTE_XPATH, element);
    const selector = descendant ? new SelectorBuilder(xpath).descendant(descendant).build() : xpath;
    return new WebElement(selector);
  }

  public async byAttribute(kvp: KVP, partial = false) {
    const webelements = await this.all;
    const webelement = await arrayFind(webelements, async (webelement) => {
      const element = await webelement.$;
      const result = await element.getAttribute(kvp.key);
      return partial ? result.includes(kvp.value) : result === kvp.value;
    });

    if (!webelement) {
      throw new Error(`WebElement matching the attribute "${kvp.key}" as "${kvp.value}" not found on ${this.selector}`);
    }
    return webelement;
  }

  public async byId(value: string, partial = false) {
    return await this.byAttribute({ key: "id", value }, partial);
  }

  public async byName(value: string, partial = false) {
    return await this.byAttribute({ key: "name", value }, partial);
  }

  public async byText(text: string, partial = false) {
    const webelements = await this.all;
    const webelement = await arrayFind(webelements, async (webelement) => {
      const element = await webelement.$;
      const result = await element.getText();
      return partial ? result.includes(text) : result === text;
    });

    if (!webelement) {
      throw new Error(`WebElement matching the text "${text}" not found on ${this.selector}`);
    }
    return webelement;
  }

  public async toTextArray() {
    const webelements = await this.all;
    const getText = async (webelement: WebElement) => {
      const element = await webelement.$;
      return await element.getText();
    };
    return await Promise.all(webelements.map((webelement) => getText(webelement)));
  }
}
