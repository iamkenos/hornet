import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class CssPropertyExists extends ExpectedCondition {
  public constructor(property: string, preferred?: boolean) {
    super(preferred);
    this.expected = true;
    this.on = property;
  }

  protected async getResult() {
    try {
      const prop = await this.element.getCSSProperty(this.on);
      this.actual = prop.value !== "" && prop.parsed !== {};
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
