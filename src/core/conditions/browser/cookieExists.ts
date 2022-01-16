import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class CookieExists extends ExpectedCondition {
  private readonly cookie: string;

  public constructor(cookie: string, preferred?: boolean) {
    super(preferred);
    this.expected = this.preferred;
    this.cookie = cookie;
    this.messageHeader = `Cookie: ${this.cookie}`;
  }

  public async evaluate() {
    try {
      this.actual = !!(await browser.getCookies([this.cookie])[0]);
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return this.getResult();
  }
}
