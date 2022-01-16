import { ExpectedConditions, TitleContains } from "@core/conditions";

export async function browserTitleToBeContaining(this: any, actual: WebdriverIO.Browser, expected: string) {
  const result = await new ExpectedConditions(browserTitleToBeContaining.name)
    .addCondition(new TitleContains(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
