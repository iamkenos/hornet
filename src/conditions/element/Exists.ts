import { ExpectedCondition } from "@conditions/expectedCondition";

export class Exists extends ExpectedCondition {
  public constructor(not?: boolean) {
    super(not);
    this.expected = true;
  }

  protected async getResult() {
    try {
      this.actual = await this.element.isExisting();
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = `${false} - ${e.message}`;
      this.passed = false;
    }

    return super.getResult();
  }
}
