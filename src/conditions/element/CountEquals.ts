import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class CountEquals extends ExpectedCondition {
  public constructor(expected: number, preferred?: boolean) {
    super(preferred);
    this.expected = expected;
  }

  protected async getResult() {
    try {
      this.actual = await $$(this.element.selector).length;
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
