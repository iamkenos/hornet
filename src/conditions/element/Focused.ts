import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class Focused extends ExpectedCondition {
  public constructor(preferred?: boolean) {
    super(preferred);
    this.expected = true;
  }

  protected async getResult() {
    try {
      this.actual = await this.element.isFocused();
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
