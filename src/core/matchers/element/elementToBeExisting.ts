import { ExpectedConditions, Existing } from "@core/conditions";

export async function elementToBeExisting(this: any, actual: Promise<WebdriverIO.Element>) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementToBeExisting.name, selector)
    .addCondition(new Existing(!this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
