import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class Enabled extends ExpectedCondition {
  public constructor(preferred?: boolean) {
    super(preferred);
    this.expected = this.preferred;
  }

  public async evaluate() {
    try {
      this.actual = await $(this.selector).isEnabled();
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return this.getResult();
  }
}
