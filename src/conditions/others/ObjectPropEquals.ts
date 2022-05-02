import { ExpectedCondition } from "@conditions/expectedCondition";

export class ObjectPropEquals<T> extends ExpectedCondition {
  public constructor(object: T, property: keyof T, expected: keyof T, not?: boolean) {
    super(not);
    this.actual = object[property];
    this.expected = expected;
    this.on = property as string;
  }

  protected async getResult() {
    this.passed = this.actual === this.expected;
    return super.getResult();
  }
}
