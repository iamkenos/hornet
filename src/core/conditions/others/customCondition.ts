import type { ExpectedCondition, CustomConditionResult, CustomConditionFunction } from "@core/conditions/types";

export class CustomCondition implements ExpectedCondition {
  readonly name: string;

  private readonly condition: CustomConditionFunction;

  private readonly preferred: boolean;

  public constructor(condition: CustomConditionFunction, preferred: boolean) {
    this.name = condition.name || this.constructor.name;
    this.condition = condition;
    this.preferred = preferred;
  }

  public async evaluate() {
    let returned: CustomConditionResult;
    let result: boolean;
    let actual: string;
    let expected: string;

    try {
      returned = await this.condition();
      actual = returned.actual;
      expected = returned.expected;
      result = this.preferred ? returned.isSuccess : !returned.isSuccess;
    } catch (e) {
      actual = e.message;
      expected = e.message;
      result = false;
    }

    return {
      name: this.name,
      actual: actual,
      expected: expected,
      isSuccess: result,
      message: `
  Condition: ${this.preferred ? "" : "(Not) "}${this.name}
  Result: ${result ? "Success" : "Failed"}
  Expected: ${expected}
  Actual: ${actual}
  `,
    };
  }
}
