import { ExpectedCondition } from "@core/conditions/expectedCondition";
import type { CustomConditionResult, CustomConditionFunction } from "@core/conditions";

export class CustomCondition extends ExpectedCondition {
  readonly condition: CustomConditionFunction;

  public constructor(condition: CustomConditionFunction, preferred?: boolean) {
    super(preferred);
    this.name = condition.name || this.constructor.name;
    this.condition = condition;
  }

  public async evaluate() {
    let result: CustomConditionResult;

    try {
      result = await this.condition();
      this.actual = result.actual;
      this.expected = result.expected;
      this.passed = this.preferred ? result.passed : !result.passed;
    } catch (e) {
      this.actual = e.message;
      this.actual = e.message;
      this.passed = false;
    }

    return this.getResult();
  }
}
