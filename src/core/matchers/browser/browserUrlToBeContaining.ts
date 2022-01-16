import { ExpectedConditions, UrlContains } from "@core/conditions";

export async function browserUrlToBeContaining(this: any, actual: WebdriverIO.Browser, expected: string) {
  const result = await new ExpectedConditions(browserUrlToBeContaining.name)
    .addCondition(new UrlContains(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
