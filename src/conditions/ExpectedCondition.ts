import type { ExpectedConditionResult } from "./types";

export abstract class ExpectedCondition {
  protected name: string;

  protected not: boolean;

  protected timeout: number;

  protected expected: any;

  protected actual: any;

  protected passed: any;

  protected result: ExpectedConditionResult;

  protected on?: string;

  protected element?: WebdriverIO.Element;

  protected constructor(not = false) {
    this.name = this.constructor.name;
    this.timeout = browser.config.waitforTimeout;
    this.not = not;
  }

  public setElement(element: WebdriverIO.Element) {
    this.element = element;
    return this;
  }

  protected async getResult() {
    const name = this.name;
    const actual = this.actual;
    const expected = this.expected;
    const passed = this.not ? !this.passed : this.passed;

    return {
      name,
      actual,
      expected,
      passed,
      message: `
  Condition: ${name} ${this.on ? `[${this.on}] ` : ""}${this.element ? `\n  Selector: ${this.element.selector}` : ""}${this.element?.index ? `\n  Index: ${this.element.index}` : ""}
  Result: ${passed ? "Success" : "Failed"}
  Expected${this.not ? " (Not)" : ""}: ${expected instanceof Array ? `\n${expected.map((i: string) => `    ${i}`).join("\n")}` : expected}
  Actual: ${actual instanceof Array ? `\n${actual.map((i: string) => `    ${i}`).join("\n")}` : actual}`
    };
  }

  public async evaluate() {
    return await this.getResult();
  }
}
