import { ExpectedConditions, TextContains } from "@core/conditions";

export async function elementTextToBeContaining(this: any, actual: Promise<WebdriverIO.Element>, expected: string) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementTextToBeContaining.name, selector)
    .addCondition(new TextContains(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
