import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class ArrayContains extends ExpectedCondition {
  readonly expected: any[];

  readonly actual: any[];

  public constructor(actual: any[], expected: any[], preferred?: boolean) {
    super(preferred);
    this.expected = expected;
    this.actual = actual;
  }

  public async evaluate() {
    try {
      this.passed = this.preferred
        ? this.expected.every((item) => this.actual.includes(item))
        : !this.expected.every((item) => this.actual.includes(item));
    } catch (e) {
      this.passed = false;
    }

    return this.getResult();
  }
}
