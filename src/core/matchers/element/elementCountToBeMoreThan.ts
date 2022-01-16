import { ExpectedConditions, CountMoreThan } from "@core/conditions";

export async function elementCountToBeMoreThan(this: any, actual: Promise<WebdriverIO.Element>, expected: number) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementCountToBeMoreThan.name, selector)
    .addCondition(new CountMoreThan(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
