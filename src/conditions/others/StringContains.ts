import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class StringContains extends ExpectedCondition {
  public constructor(actual: string, expected: string, preferred?: boolean) {
    super(preferred);
    this.actual = actual;
    this.expected = expected;
  }

  protected async getResult() {
    this.passed = this.actual.includes(this.expected);
    return super.getResult();
  }
}
