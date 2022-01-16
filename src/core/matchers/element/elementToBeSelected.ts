import { ExpectedConditions, Selected } from "@core/conditions";

export async function elementToBeSelected(this: any, actual: Promise<WebdriverIO.Element>) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementToBeSelected.name, selector)
    .addCondition(new Selected(!this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
