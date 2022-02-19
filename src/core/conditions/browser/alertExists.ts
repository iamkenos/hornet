import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class AlertExists extends ExpectedCondition {
  public constructor(preferred?: boolean) {
    super(preferred);
    this.expected = true;
  }

  public async evaluate() {
    try {
      this.actual = (await browser.getAlertText()).length >= 0;
      this.passed = this.preferred ? this.actual === this.expected : this.actual !== this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
      if (e.message.includes("no such alert")) this.passed = !this.preferred;
    }

    return this.getResult();
  }
}
