import { ExpectedConditions, WindowCountMoreThan } from "@core/conditions";

export async function browserWindowCountToBeMoreThan(this: any, actual: WebdriverIO.Browser, expected: number) {
  const result = await new ExpectedConditions(browserWindowCountToBeMoreThan.name)
    .addCondition(new WindowCountMoreThan(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
