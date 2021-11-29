import { ExpectedConditions, UrlPathEquals } from "@core/conditions";

export async function browserUrlPathToBeEqual(this: any, actual: WebdriverIO.Browser, expected: string) {
  const result = await new ExpectedConditions(browserUrlPathToBeEqual.name)
    .addCondition(new UrlPathEquals(expected, !this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
