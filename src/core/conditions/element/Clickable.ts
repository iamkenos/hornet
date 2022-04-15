import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class Clickable extends ExpectedCondition {
  public constructor(not?: boolean) {
    super(not);
    this.expected = true;
  }

  protected async getResult() {
    try {
      this.actual = await $(this.selector).isClickable();
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
