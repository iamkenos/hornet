import { ExpectedCondition } from "@hornet/core/conditions/expectedCondition";

export class WindowCountMoreThan extends ExpectedCondition {
  public constructor(expected: number, not?: boolean) {
    super(not);
    this.expected = expected;
  }

  protected async getResult() {
    try {
      this.actual = (await browser.getWindowHandles()).length;
      this.passed = this.actual > this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
