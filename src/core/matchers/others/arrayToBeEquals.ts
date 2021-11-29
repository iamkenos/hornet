import { ExpectedConditions, ArrayEquals } from "@core/conditions";

export async function arrayToBeEquals(this: any, actual: any[], expected: any[]) {
  const result = await new ExpectedConditions(arrayToBeEquals.name)
    .addCondition(new ArrayEquals(actual, expected, !this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
