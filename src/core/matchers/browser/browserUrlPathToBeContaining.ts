import { ExpectedConditions, UrlPathContains } from "@core/conditions";

export async function browserUrlPathToBeContaining(this: any, actual: WebdriverIO.Browser, expected: string) {
  const result = await new ExpectedConditions(browserUrlPathToBeContaining.name)
    .addCondition(new UrlPathContains(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
