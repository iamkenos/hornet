import { ExpectedConditions, Focused } from "@core/conditions";

export async function elementToBeFocused(this: any, actual: Promise<WebdriverIO.Element>) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementToBeFocused.name, selector)
    .addCondition(new Focused(!this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}