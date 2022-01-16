import { ExpectedConditions, ValueContains } from "@core/conditions";

export async function elementValueToBeContaining(this: any, actual: Promise<WebdriverIO.Element>, expected: string) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementValueToBeContaining.name, selector)
    .addCondition(new ValueContains(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
