import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class ObjectPropEquals<T> extends ExpectedCondition {
  public constructor(object: T, property: keyof T, expected: any, preferred?: boolean) {
    super(preferred);
    this.actual = object[property];
    this.expected = expected;
    this.on = property as string;
  }

  protected async getResult() {
    this.passed = this.actual === this.expected;
    return super.getResult();
  }
}
