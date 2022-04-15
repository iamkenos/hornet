import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class Enabled extends ExpectedCondition {
  public constructor(not?: boolean) {
    super(not);
    this.expected = true;
  }

  protected async getResult() {
    try {
      this.actual = await $(this.selector).isEnabled() && !(await $(this.selector).getAttribute("disabled"));
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
