import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class ValueContains extends ExpectedCondition {
  public constructor(expected: string, not?: boolean) {
    super(not);
    this.expected = expected || "";
  }

  protected async getResult() {
    try {
      this.actual = await this.element.getValue();
      this.passed = this.actual.includes(this.expected);
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}