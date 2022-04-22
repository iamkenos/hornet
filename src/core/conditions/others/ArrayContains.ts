import { ExpectedCondition } from "@hornet/core/conditions/expectedCondition";

export class ArrayContains<T> extends ExpectedCondition {
  public constructor(actual: Array<T>, expected: Array<T>, not?: boolean) {
    super(not);
    this.actual = actual;
    this.expected = expected;
  }

  protected async getResult() {
    try {
      this.passed = this.expected.every((item: T) => this.actual.includes(item));
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
