import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class AttributeEquals extends ExpectedCondition {
  public constructor(attribute: string, expected: string, preferred?: boolean) {
    super(preferred);
    this.expected = expected;
    this.on = attribute;
  }

  protected async getResult() {
    try {
      this.actual = await this.element.getAttribute(this.on);
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
