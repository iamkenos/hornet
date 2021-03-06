import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class ArrayContains<T> extends ExpectedCondition {
  public constructor(actual: Array<T>, expected: Array<T>, preferred?: boolean) {
    super(preferred);
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
