import { isURL } from "@core/conditions";
import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class UrlEquals extends ExpectedCondition {
  public constructor(expected: string, preferred?: boolean) {
    super(preferred);
    this.expected = isURL(expected) ? expected : new URL(expected, browser.config.baseUrl).href || "";
  }

  public async evaluate() {
    try {
      this.actual = await browser.getUrl();
      this.passed = this.preferred ? this.actual === this.expected : this.actual !== this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return this.getResult();
  }
}
