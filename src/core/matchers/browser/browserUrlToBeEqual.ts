import { ExpectedConditions, UrlEquals } from "@core/conditions";

export async function browserUrlToBeEqual(this: any, actual: WebdriverIO.Browser, expected: string) {
  const result = await new ExpectedConditions(browserUrlToBeEqual.name)
    .addCondition(new UrlEquals(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
