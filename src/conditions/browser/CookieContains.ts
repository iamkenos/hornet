import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class CookieContains extends ExpectedCondition {
  public constructor(cookie: string, expected: string, preferred?: boolean) {
    super(preferred);
    this.expected = expected || "";
    this.on = cookie;
  }

  protected async getResult() {
    try {
      const [ cookie ] = await browser.getCookies([this.on]);
      this.actual = cookie?.value;
      this.passed = this.actual.includes(this.expected);
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
