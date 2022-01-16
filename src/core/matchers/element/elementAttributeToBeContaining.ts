import { ExpectedConditions, AttributeContains } from "@core/conditions";

export async function elementAttributeToBeContaining(this: any, actual: Promise<WebdriverIO.Element>, attribute: string, expected: string) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementAttributeToBeContaining.name, selector)
    .addCondition(new AttributeContains(attribute, expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
