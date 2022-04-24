import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class UrlPathContains extends ExpectedCondition {
  public constructor(expected: string, not?: boolean) {
    super(not);
    this.expected = expected || "";
  }

  protected async getResult() {
    try {
      const url = new URL(await browser.getUrl());
      this.actual = url.pathname;
      this.passed = this.actual.includes(this.expected);
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
