import { JS_GET_ABSOLUTE_XPATH } from "@core/commands";
import { arrayFind, KVP } from "@core/common";
import { SelectorBuilder } from "@core/generics";
export class WebElement {
  public readonly parent: string;
  public selector: string;

  public constructor(selector: string) {
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

  public async byAbsoluteXpath(descendant = "") {
    const element = await this.$;
    const xpath = await browser.execute<string, any>(JS_GET_ABSOLUTE_XPATH, element);
    const selector = descendant ? new SelectorBuilder(xpath).descendant(descendant).build() : xpath;
    return new WebElement(selector);
  }

  public async byMatchingAttribute(kvp: KVP) {
    const webelements = await this.all;
    const webelement = await arrayFind(webelements, async (webelement) => {
      const element = await webelement.$;
      return (await element.getAttribute(kvp.key)) === kvp.value;
    });

    if (!webelement) {
      throw new Error(`WebElement matching the attribute "${kvp.key}" as "${kvp.value}" not found on ${this.selector}`);
    }
    return webelement;
  }

  public async byMatchingText(text: string) {
    const webelements = await this.all;
    const webelement = await arrayFind(webelements, async (webelement) => {
      const element = await webelement.$;
      return (await element.getText()) === text;
    });

    if (!webelement) {
      throw new Error(`WebElement matching the text "${text}" not found on ${this.selector}`);
    }
    return webelement;
  }

  public async byMatchingPartialAttribute(kvp: KVP) {
    const webelements = await this.all;
    const webelement = await arrayFind(webelements, async (webelement) => {
      const element = await webelement.$;
      return (await element.getAttribute(kvp.key)).includes(kvp.value);
    });

    if (!webelement) {
      throw new Error(
        `WebElement partially matching the attribute "${kvp.key}" as "${kvp.value}" not found on ${this.selector}`
      );
    }
    return webelement;
  }

  public async byMatchingPartialText(text: string) {
    const webelements = await this.all;
    const webelement = await arrayFind(webelements, async (webelement) => {
      const element = await webelement.$;
      return (await element.getText()).includes(text);
    });

    if (!webelement) {
      throw new Error(`WebElement partiallymatching the text "${text}" not found on ${this.selector}`);
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
