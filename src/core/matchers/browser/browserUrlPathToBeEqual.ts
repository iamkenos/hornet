import { ExpectedConditions, UrlPathEquals } from "@core/conditions";

export async function browserUrlPathToBeEqual(this: any, actual: WebdriverIO.Browser, expected: string) {
  const result = await new ExpectedConditions(browserUrlPathToBeEqual.name)
    .addCondition(new UrlPathEquals(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
