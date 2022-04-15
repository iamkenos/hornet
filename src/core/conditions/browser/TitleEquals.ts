import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class TitleEquals extends ExpectedCondition {
  public constructor(expected: string, not?: boolean) {
    super(not);
    this.expected = expected || "";
  }

  protected async getResult() {
    try {
      this.actual = await browser.getTitle();
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
