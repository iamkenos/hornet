import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class AttributeExists extends ExpectedCondition {
  public constructor(attribute: string, preferred?: boolean) {
    super(preferred);
    this.expected = true;
    this.on = attribute;
  }

  protected async getResult() {
    try {
      this.actual = !!(await this.element.getAttribute(this.on));
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
