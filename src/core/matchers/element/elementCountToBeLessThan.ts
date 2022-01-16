import { ExpectedConditions, CountLessThan } from "@core/conditions";

export async function elementCountToBeLessThan(this: any, actual: Promise<WebdriverIO.Element>, expected: number) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementCountToBeLessThan.name, selector)
    .addCondition(new CountLessThan(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
