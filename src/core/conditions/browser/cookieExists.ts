import type { ExpectedCondition } from "@core/conditions/types";

export class CookieExists implements ExpectedCondition {
  readonly name: string;

  private readonly cookie: string;

  private readonly expected: boolean;

  private readonly preferred: boolean;

  public constructor(cookie: string, preferred: boolean) {
    this.name = this.constructor.name;
    this.cookie = cookie;
    this.expected = preferred;
    this.preferred = preferred;
  }

  public async evaluate() {
    let actual: boolean;
    let result: boolean;

    try {
      actual = !!(await browser.getCookies([this.cookie])[0]);
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
  Cookie: ${this.cookie}
  Result: ${result ? "Success" : "Failed"}
  Expected: ${this.expected}
  Actual: ${actual}
  `,
    };
  }
}
