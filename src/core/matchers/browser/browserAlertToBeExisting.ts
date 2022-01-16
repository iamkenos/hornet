import { ExpectedConditions, AlertExists } from "@core/conditions";

export async function browserAlertToBeExisting(this: any, actual: WebdriverIO.Browser) {
  const result = await new ExpectedConditions(browserAlertToBeExisting.name)
    .addCondition(new AlertExists(!this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
