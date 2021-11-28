import type { ExpectedCondition } from "@core/conditions/types";
import { JS_IS_DOC_READY } from "@core/utils";

export class DocumentReady implements ExpectedCondition {
  readonly name: string;

  private readonly expected: string;

  private readonly preferred: boolean;

  public constructor(preferred: boolean) {
    this.name = this.constructor.name;
    this.expected = "complete";
    this.preferred = preferred;
  }

  public async evaluate() {
    let actual: string;
    let result: boolean;

    try {
      actual = await browser.execute(JS_IS_DOC_READY);
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
