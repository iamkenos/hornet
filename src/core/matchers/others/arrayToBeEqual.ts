import { ExpectedConditions, ArrayEquals } from "@core/conditions";

export async function arrayToBeEqual(this: any, actual: any[], expected: any[]) {
  const result = await new ExpectedConditions(arrayToBeEqual.name)
    .addCondition(new ArrayEquals(actual, expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
