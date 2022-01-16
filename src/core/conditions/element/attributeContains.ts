import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class AttributeContains extends ExpectedCondition {
  private readonly attribute: string;

  public constructor(attribute: string, expected: string, preferred?: boolean) {
    super(preferred);
    this.expected = expected || "";
    this.attribute = attribute;
    this.messageHeader = `Attribute: ${this.attribute}`;
  }

  public async evaluate() {
    try {
      this.actual = await $(this.selector).getAttribute(this.attribute);
      this.passed = this.preferred ? this.actual.includes(this.expected) : !this.actual.includes(this.expected);
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return this.getResult();
  }
}
