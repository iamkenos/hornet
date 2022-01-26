import { SizeContext } from "@core/commands";
import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class SizeSideEquals extends ExpectedCondition {
  private readonly side: SizeContext;

  public constructor(side: SizeContext, expected: number, preferred?: boolean) {
    super(preferred);
    this.side = side;
    this.expected = this.toString(expected);
  }

  private toString(size: number) {
    return `${size}px`;
  }

  public async evaluate() {
    try {
      const size = await $(this.selector).getSize(this.side) as any;
      this.actual = this.toString(size);
      this.passed = this.preferred ? this.actual === this.expected : this.actual !== this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return this.getResult();
  }
}
