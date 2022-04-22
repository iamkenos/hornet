import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class AttributeContains extends ExpectedCondition {
  public constructor(attribute: string, expected: string, not?: boolean) {
    super(not);
    this.expected = expected || "";
    this.on = attribute;
  }

  protected async getResult() {
    try {
      this.actual = await this.element.getAttribute(this.on);
      this.passed = this.actual.includes(this.expected);
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}