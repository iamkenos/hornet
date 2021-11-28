import type { ExpectedCondition } from "@core/conditions/types";

export class ModalExists implements ExpectedCondition {
  readonly name: string;

  private readonly expected: any;

  private readonly preferred: boolean;

  public constructor(preferred: boolean) {
    this.name = this.constructor.name;
    this.expected = preferred;
    this.preferred = preferred;
  }

  public async evaluate() {
    let actual: boolean;
    let result: boolean;

    try {
      actual = (await browser.getAlertText()).length >= 0;
      result = actual === this.expected;
    } catch (e) {
      actual = e.message;
      result = false;
      if (e.message.includes("no such alert")) result = !this.preferred;
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
