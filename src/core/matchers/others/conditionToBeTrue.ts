import { ExpectedConditions, CustomCondition, CustomConditionFunction } from "@core/conditions";

export async function conditionToBeTrue(this: any, actual: CustomConditionFunction) {
  const result = await new ExpectedConditions(conditionToBeTrue.name)
    .addCondition(new CustomCondition(actual, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
