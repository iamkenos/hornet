import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class UrlPathEquals extends ExpectedCondition {
  public constructor(expected: string, not?: boolean) {
    super(not);
    this.expected = expected || "";
  }

  protected async getResult() {
    try {
      const url = new URL(await browser.getUrl());
      this.actual = url.pathname;
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
