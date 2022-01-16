import { ExpectedConditions, CssPropertyExists } from "@core/conditions";

export async function elementCssPropertyToBeExisting(this: any, actual: Promise<WebdriverIO.Element>, cssProperty: string) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementCssPropertyToBeExisting.name, selector)
    .addCondition(new CssPropertyExists(cssProperty, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
