import { ExpectedConditions, Enabled } from "@core/conditions";

export async function elementToBeEnabled(this: any, actual: Promise<WebdriverIO.Element>) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementToBeEnabled.name, selector)
    .addCondition(new Enabled(!this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
