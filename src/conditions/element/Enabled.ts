import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class Enabled extends ExpectedCondition {
  public constructor(preferred?: boolean) {
    super(preferred);
    this.expected = true;
  }

  protected async getResult() {
    try {
      this.actual = await this.element.isEnabled();
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
