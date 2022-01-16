import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class CookieContains extends ExpectedCondition {
  private readonly cookie: string;

  public constructor(cookie: string, expected: string, preferred?: boolean) {
    super(preferred);
    this.expected = expected || "";
    this.cookie = cookie;
    this.messageHeader = `Cookie: ${this.cookie}`;
  }

  public async evaluate() {
    try {
      this.actual = await browser.getCookies([this.cookie])[0].value;
      this.passed = this.preferred ? this.actual.includes(this.expected) : !this.actual.includes(this.expected);
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return this.getResult();
  }
}
