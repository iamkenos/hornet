import { ExpectedConditions, AttributeExists } from "@core/conditions";

export async function elementAttributeToBeExisting(this: any, actual: Promise<WebdriverIO.Element>, attribute: string) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementAttributeToBeExisting.name, selector)
    .addCondition(new AttributeExists(attribute, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
