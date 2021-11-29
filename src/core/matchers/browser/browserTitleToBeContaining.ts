import { ExpectedConditions, TitleContains } from "@core/conditions";

export async function browserTitleToBeContaining(this: any, actual: WebdriverIO.Browser, expected: string) {
  const result = await new ExpectedConditions(browserTitleToBeContaining.name)
    .addCondition(new TitleContains(expected, !this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
