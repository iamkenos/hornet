import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class DisplayedInViewport extends ExpectedCondition {
  public constructor(preferred?: boolean) {
    super(preferred);
    this.expected = true;
  }

  protected async getResult() {
    try {
      this.actual = await this.element.isDisplayedInViewport();
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
