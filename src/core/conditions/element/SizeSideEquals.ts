import type { SizeContext } from "@core/commands";
import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class SizeSideEquals extends ExpectedCondition {
  public constructor(side: SizeContext, expected: number, not?: boolean) {
    super(not);
    this.on = side;
    this.expected = this.toString(expected);
  }

  private toString(size: number) {
    return `${size}px`;
  }

  protected async getResult() {
    try {
      const size = await $(this.selector).getSize(this.on as SizeContext) as any;
      this.actual = this.toString(size);
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
