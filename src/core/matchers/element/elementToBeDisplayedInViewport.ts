import { ExpectedConditions, DisplayedInViewport } from "@core/conditions";

export async function elementToBeDisplayedInViewport(this: any, actual: Promise<WebdriverIO.Element>) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementToBeDisplayedInViewport.name, selector)
    .addCondition(new DisplayedInViewport(!this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
