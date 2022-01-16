import { ExpectedConditions, TextEquals } from "@core/conditions";

export async function elementTextToBeEqual(this: any, actual: Promise<WebdriverIO.Element>, expected: string) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementTextToBeEqual.name, selector)
    .addCondition(new TextEquals(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
