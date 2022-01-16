import { ExpectedConditions, WindowCountEquals } from "@core/conditions";

export async function browserWindowCountToBeEqual(this: any, actual: WebdriverIO.Browser, expected: number) {
  const result = await new ExpectedConditions(browserWindowCountToBeEqual.name)
    .addCondition(new WindowCountEquals(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
