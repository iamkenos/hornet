import type { ExpectedCondition } from "@core/conditions/types";

export class WindowCountEquals implements ExpectedCondition {
  readonly name: string;

  private readonly expected: number;

  private readonly preferred: boolean;

  public constructor(expected: number, preferred: boolean) {
    this.name = this.constructor.name;
    this.expected = expected;
    this.preferred = preferred;
  }

  public async evaluate() {
    let actual: number;
    let result: boolean;

    try {
      actual = (await browser.getWindowHandles()).length;
      result = this.preferred ? actual === this.expected : actual !== this.expected;
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
