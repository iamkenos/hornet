import { ExpectedConditions, AlertTextContains } from "@core/conditions";

export async function browserAlertTextToBeContaining(this: any, actual: WebdriverIO.Browser, expected: string) {
  const result = await new ExpectedConditions(browserAlertTextToBeContaining.name)
    .addCondition(new AlertTextContains(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
