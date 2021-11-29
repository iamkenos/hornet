import { ExpectedConditions, UrlContains } from "@core/conditions";

export async function browserUrlToBeContaining(this: any, actual: WebdriverIO.Browser, expected: string) {
  const result = await new ExpectedConditions(browserUrlToBeContaining.name)
    .addCondition(new UrlContains(expected, !this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
