import { ExpectedConditions, UrlPathContains } from "@core/conditions";

export async function browserUrlPathToBeContaining(this: any, actual: WebdriverIO.Browser, expected: string) {
  const result = await new ExpectedConditions(browserUrlPathToBeContaining.name)
    .addCondition(new UrlPathContains(expected, !this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
