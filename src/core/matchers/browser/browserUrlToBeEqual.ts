import { ExpectedConditions, UrlEquals } from "@core/conditions";

export async function browserUrlToBeEqual(this: any, actual: WebdriverIO.Browser, expected: string) {
  const result = await new ExpectedConditions(browserUrlToBeEqual.name)
    .addCondition(new UrlEquals(expected, !this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
