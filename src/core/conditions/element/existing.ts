import type { ExpectedCondition } from "@core/conditions/types";

export class Existing implements ExpectedCondition {
  readonly name: string;

  private readonly expected: boolean;

  private readonly preferred: boolean;

  public constructor(preferred: boolean) {
    this.name = this.constructor.name;
    this.expected = !!preferred;
    this.preferred = preferred;
  }

  public async evaluate(selector: string) {
    let actual: boolean;
    let result: boolean;

    try {
      actual = !!(await $(selector)).isExisting();
      result = actual === this.expected;
    } catch (e) {
      actual = e.message;
      result = false;
    }

    return {
      name: this.name,
      actual: actual,
      expected: this.expected,
      isSuccess: result,
      message: `
  Condition: ${this.preferred ? "" : "(Not) "}${this.name}
  Result: ${result ? "Success" : "Failed"}
  Expected: ${this.expected}
  Actual: ${actual}
  `
    };
  }
}
