import { ExpectedConditions, WindowCountLessThan } from "@core/conditions";

export async function browserWindowCountToBeLessThan(this: any, actual: WebdriverIO.Browser, expected: number) {
  const result = await new ExpectedConditions(browserWindowCountToBeLessThan.name)
    .addCondition(new WindowCountLessThan(expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
