import { ExpectedConditions, AttributeEquals } from "@core/conditions";

export async function elementAttributeToBeEqual(this: any, actual: Promise<WebdriverIO.Element>, attribute: string, expected: string) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementAttributeToBeEqual.name, selector)
    .addCondition(new AttributeEquals(attribute, expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
