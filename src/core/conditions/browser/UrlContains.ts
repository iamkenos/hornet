import { isURL } from "@core/common";
import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class UrlContains extends ExpectedCondition {
  public constructor(expected: string, not?: boolean) {
    super(not);
    this.expected = isURL(expected) ? expected : new URL(expected, browser.config.baseUrl).href || "";
  }

  protected async getResult() {
    try {
      this.actual = await browser.getUrl();
      this.passed = this.actual.includes(this.expected);
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
