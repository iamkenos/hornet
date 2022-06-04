import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class TextContains extends ExpectedCondition {
  public constructor(expected: string, preferred?: boolean) {
    super(preferred);
    this.expected = expected || "";
  }

  protected async getResult() {
    try {
      this.actual = await this.element.getText();
      this.passed = this.actual.includes(this.expected);
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
