import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class AlertExists extends ExpectedCondition {
  public constructor(not?: boolean) {
    super(not);
    this.expected = true;
  }

  protected async getResult() {
    try {
      const text = await browser.getAlertText();
      this.actual = text.length >= 0;
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
