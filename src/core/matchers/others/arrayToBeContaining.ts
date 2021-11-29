import { ExpectedConditions, ArrayContains } from "@core/conditions";

export async function arrayToBeContaining(this: any, actual: any[], expected: any[]) {
  const result = await new ExpectedConditions(arrayToBeContaining.name)
    .addCondition(new ArrayContains(actual, expected, !this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
