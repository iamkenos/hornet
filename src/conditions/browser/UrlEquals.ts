import { string } from "@common";
import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class UrlEquals extends ExpectedCondition {
  public constructor(expected: string, preferred?: boolean) {
    super(preferred);
    this.expected = expected || "";
    this.expected = string.isURL(this.expected) ? this.expected : new URL(this.expected, browser.config.baseUrl).href;
  }

  protected async getResult() {
    try {
      this.actual = await browser.getUrl();
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
