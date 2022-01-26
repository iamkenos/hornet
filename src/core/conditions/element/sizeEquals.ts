import type { Size } from "@core/commands";
import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class SizeEquals extends ExpectedCondition {
  public constructor(width: number, height: number, preferred?: boolean) {
    super(preferred);
    this.expected = this.toString(width, height)
  }

  private toString(width: number, height: number) {
    return `${width}px x ${height}px`;
  }

  public async evaluate() {
    try {
      const size: Size = await $(this.selector).getSize(undefined) as any;
      this.actual = this.toString(size.width, size.height)
      this.passed = this.preferred ? this.actual === this.expected : this.actual !== this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return this.getResult();
  }
}
