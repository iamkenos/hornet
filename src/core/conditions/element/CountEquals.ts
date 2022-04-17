import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class CountEquals extends ExpectedCondition {
  public constructor(expected: number, not?: boolean) {
    super(not);
    this.expected = expected;
  }

  protected async getResult() {
    try {
      this.actual = await $$(this.selector).length;
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
