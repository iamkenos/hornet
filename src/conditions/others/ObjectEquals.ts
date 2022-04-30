import { ExpectedCondition } from "@conditions/expectedCondition";

export class ObjectEquals extends ExpectedCondition {
  public constructor(actual: any, expected: any, not?: boolean) {
    super(not);
    this.actual = actual;
    this.expected = expected;
  }

  protected async getResult() {
    try {
      this.passed = JSON.stringify(this.actual) === JSON.stringify(this.expected);
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
