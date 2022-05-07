import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class SizeEquals extends ExpectedCondition {
  public constructor(width: number, height: number, not?: boolean) {
    super(not);
    this.expected = this.toString(width, height);
  }

  private toString(width: number, height: number) {
    return `${width}px x ${height}px`;
  }

  protected async getResult() {
    try {
      const size = await this.element.getSize(undefined) as any;
      this.actual = this.toString(size.width, size.height);
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
