import type { Axis } from "@core/commands";
import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class AxisLocationEquals extends ExpectedCondition {
  public constructor(axis: Axis, expected?: number, not?: boolean) {
    super(not);
    this.expected = expected;
    this.on = axis;
  }

  protected async getResult() {
    try {
      this.actual = await $(this.selector).getLocation(this.on as Axis);
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
