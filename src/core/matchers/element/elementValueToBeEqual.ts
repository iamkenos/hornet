import { ExpectedConditions, ValueEquals } from "@core/conditions";

export async function elementValueToBeEqual(this: any, actual: Promise<WebdriverIO.Element>, expected: string) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementValueToBeEqual.name, selector)
    .addCondition(new ValueEquals(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
