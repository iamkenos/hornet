import { ExpectedConditions, DocumentReady } from "@core/conditions";

export async function browserToBeReady(this: any, actual: WebdriverIO.Browser) {
  const result = await new ExpectedConditions(browserToBeReady.name)
    .addCondition(new DocumentReady(!this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
