import { ExpectedConditions, Displayed } from "@core/conditions";

export async function elementToBeDisplayed(this: any, actual: Promise<WebdriverIO.Element>) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementToBeDisplayed.name, selector)
    .addCondition(new Displayed(!this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
