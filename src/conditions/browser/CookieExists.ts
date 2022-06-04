import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class CookieExists extends ExpectedCondition {
  public constructor(cookie: string, preferred?: boolean) {
    super(preferred);
    this.expected = true;
    this.on = cookie;
  }

  protected async getResult() {
    try {
      const [ cookie ] = await browser.getCookies([this.on]);
      this.actual = !!cookie?.value;
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
