import { ExpectedConditions, DocumentReady } from "@core/conditions";

export async function browserToBeReady(this: any, actual: WebdriverIO.Browser) {
  const result = await new ExpectedConditions(browserToBeReady.name)
    .addCondition(new DocumentReady(!this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
