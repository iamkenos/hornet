import { ExpectedConditions, CustomCondition, CustomConditionFunction } from "@core/conditions";

export async function customConditionToBeTrue(this: any, actual: CustomConditionFunction) {
  const result = await new ExpectedConditions(customConditionToBeTrue.name)
    .addCondition(new CustomCondition(actual, !this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
