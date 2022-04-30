import { ExpectedCondition } from "@conditions/expectedCondition";

export class ObjectPropEquals extends ExpectedCondition {
  public constructor(object: any, property: string, expected: any, not?: boolean) {
    super(not);
    this.actual = object[property];
    this.expected = expected;
    this.on = property;
  }

  protected async getResult() {
    try {
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
