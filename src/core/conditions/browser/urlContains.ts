import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class UrlContains extends ExpectedCondition {
  public constructor(expected: string, preferred?: boolean) {
    super(preferred);
    this.expected = expected;
  }

  public async evaluate() {
    try {
      this.actual = await browser.getUrl();
      this.passed = this.preferred ? this.actual.includes(this.expected) : !this.actual.includes(this.expected);
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return this.getResult();
  }
}
