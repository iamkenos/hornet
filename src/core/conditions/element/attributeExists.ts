import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class AttributeExists extends ExpectedCondition {
  private readonly attribute: string;

  public constructor(attribute: string, preferred?: boolean) {
    super(preferred);
    this.expected = true;
    this.attribute = attribute;
    this.messageHeader = `Attribute: ${this.attribute}`;
  }

  public async evaluate() {
    try {
      this.actual = !!(await $(this.selector).getAttribute(this.attribute));
      this.passed = this.preferred ? this.actual === this.expected : this.actual !== this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return this.getResult();
  }
}
