import { ExpectedConditions, CountEquals } from "@core/conditions";

export async function elementCountToBeEqual(this: any, actual: Promise<WebdriverIO.Element>, expected: number) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementCountToBeEqual.name, selector)
    .addCondition(new CountEquals(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
