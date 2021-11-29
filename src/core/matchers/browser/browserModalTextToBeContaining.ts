import { ExpectedConditions, ModalTextContains } from "@core/conditions";

export async function browserModalTextToBeContaining(this: any, actual: WebdriverIO.Browser, expected: string) {
  const result = await new ExpectedConditions(browserModalTextToBeContaining.name)
    .addCondition(new ModalTextContains(expected, !this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
