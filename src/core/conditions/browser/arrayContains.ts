import type { ExpectedCondition } from "@core/conditions/types";

export class ArrayContains implements ExpectedCondition {
  readonly name: string;

  private readonly expected: any[];

  private readonly actual: any[];

  private readonly preferred: boolean;

  public constructor(actual: any[], expected: any[], preferred: boolean) {
    this.name = this.constructor.name;
    this.actual = actual;
    this.expected = expected;
    this.preferred = preferred;
  }

  public async evaluate() {
    let result: boolean;

    try {
      result = this.preferred ? this.expected.every((item) => this.actual.includes(item)) : !this.expected.every((item) => this.actual.includes(item));
    } catch (e) {
      result = false;
    }

    return {
      name: this.name,
      actual: this.actual,
      expected: this.expected,
      isSuccess: result,
      message: `
  Condition: ${this.preferred ? "" : "(Not) "}${this.name}
  Result: ${result ? "Success" : "Failed"}
  Expected: \n${this.expected.map((i: string) => `    ${i}`).join("\n")}
  Actual: \n${this.actual.map((i: string) => `    ${i}`).join("\n")}
  `,
    };
  }
}
