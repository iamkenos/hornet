import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class CookieContains extends ExpectedCondition {
  public constructor(cookie: string, expected: string, not?: boolean) {
    super(not);
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
