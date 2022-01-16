import { ExpectedConditions, AlertTextEquals } from "@core/conditions";

export async function browserAlertTextToBeEqual(this: any, actual: WebdriverIO.Browser, expected: string) {
  const result = await new ExpectedConditions(browserAlertTextToBeEqual.name)
    .addCondition(new AlertTextEquals(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
