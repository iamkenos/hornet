import { Axis } from "@core/commands";
import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class AxisLocationEquals extends ExpectedCondition {
  private readonly axis: Axis;

  public constructor(axis: Axis, expected: number, preferred?: boolean) {
    super(preferred);
    this.expected = expected;
    this.axis = axis;
    this.messageHeader = `Axis: ${this.axis}`;
  }

  public async evaluate() {
    try {
      this.actual = await $(this.selector).getLocation(this.axis);
      this.passed = this.preferred ? this.actual === this.expected : this.actual !== this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return this.getResult();
  }
}
