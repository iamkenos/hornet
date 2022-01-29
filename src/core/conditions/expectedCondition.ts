import type { Selector } from "webdriverio";

export abstract class ExpectedCondition {
  protected name: string;

  protected preferred: boolean;

  protected expected: any;

  protected actual: any;

  protected passed: any;

  protected selector?: string | Selector;

  protected messageHeader?: string;

  protected constructor(preferred = true) {
    this.name = this.constructor.name;
    this.preferred = preferred;
  }

  private getMessage() {
    return `
  Condition: ${this.name}${this.messageHeader ? `\n  ${this.messageHeader}` : ``}
  Result: ${this.passed ? "Success" : "Failed"}
  Expected${this.preferred ? "" : " (Not)"}: ${this.expected instanceof Array ? `\n${this.expected.map((i: string) => `    ${i}`).join("\n")}` : this.expected}
  Actual: ${this.actual instanceof Array ? `\n${this.actual.map((i: string) => `    ${i}`).join("\n")}` : this.actual}`;
  }

  public setSelector(selector: string | Selector) {
    this.selector = selector;
    return this;
  }

  public getResult() {
    return {
      name: this.name,
      actual: this.actual,
      expected: this.expected,
      passed: this.passed,
      message: this.getMessage()
    };
  }

  public async evaluate() {
    return this.getResult();
  }
}
