import { ExpectedConditions, ModalTextEquals } from "@core/conditions";

export async function browserModalTextToBeEqual(this: any, actual: WebdriverIO.Browser, expected: string) {
  const result = await new ExpectedConditions(browserModalTextToBeEqual.name)
    .addCondition(new ModalTextEquals(expected, !this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
