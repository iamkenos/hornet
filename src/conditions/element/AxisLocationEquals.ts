import type { Axis } from "@commands";
import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class AxisLocationEquals extends ExpectedCondition {
  public constructor(axis: Axis, expected: number, preferred?: boolean) {
    super(preferred);
    this.expected = expected;
    this.on = axis;
  }

  protected async getResult() {
    try {
      this.actual = await this.element.getLocation(this.on as Axis);
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
