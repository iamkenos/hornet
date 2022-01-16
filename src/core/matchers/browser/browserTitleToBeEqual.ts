import { ExpectedConditions, TitleEquals } from "@core/conditions";

export async function browserTitleToBeEqual(this: any, actual: WebdriverIO.Browser, expected: string) {
  const result = await new ExpectedConditions(browserTitleToBeEqual.name)
    .addCondition(new TitleEquals(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
