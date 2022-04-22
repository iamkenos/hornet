import { isURL } from "@hornet/core/common";
import { ExpectedCondition } from "@hornet/core/conditions/expectedCondition";

export class UrlEquals extends ExpectedCondition {
  public constructor(expected: string, not?: boolean) {
    super(not);
    this.expected = this.expected = isURL(expected) ? expected : new URL(expected, browser.config.baseUrl).href || "";
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
