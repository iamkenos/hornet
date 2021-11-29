import { ExpectedConditions, ModalExists } from "@core/conditions";

export async function browserModalToBeExisting(this: any, actual: WebdriverIO.Browser) {
  const result = await new ExpectedConditions(browserModalToBeExisting.name)
    .addCondition(new ModalExists(!this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
