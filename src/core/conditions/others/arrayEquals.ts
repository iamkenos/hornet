import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class ArrayEquals extends ExpectedCondition {
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
        ? JSON.stringify(this.actual) === JSON.stringify(this.expected)
        : JSON.stringify(this.actual) !== JSON.stringify(this.expected);
    } catch (e) {
      this.passed = false;
    }

    return this.getResult();
  }
}
