import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class AlertTextEquals extends ExpectedCondition {
  public constructor(expected: string, preferred?: boolean) {
    super(preferred);
    this.expected = expected;
  }

  protected async getResult() {
    try {
      this.actual = await browser.getAlertText();
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
