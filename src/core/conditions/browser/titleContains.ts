import type { ExpectedCondition } from "@core/conditions/types";

export class TitleContains implements ExpectedCondition {
  readonly name: string;

  private readonly expected: string;

  private readonly preferred: boolean;

  public constructor(expected: string, preferred: boolean) {
    this.name = this.constructor.name;
    this.expected = expected;
    this.preferred = preferred;
  }

  public async evaluate() {
    let actual: string;
    let result: boolean;

    try {
      actual = await browser.getTitle();
      result = this.preferred ? actual.includes(this.expected) : !actual.includes(this.expected);
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
  `,
    };
  }
}
