import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class CssPropertyExists extends ExpectedCondition {
  private readonly cssProperty: string;

  public constructor(cssProperty: string, preferred?: boolean) {
    super(preferred);
    this.expected = this.preferred;
    this.cssProperty = cssProperty;
    this.messageHeader = `Css Property: ${this.cssProperty}`;
  }

  public async evaluate() {
    try {
      const prop = (await $(this.selector).getCSSProperty(this.cssProperty));
      this.actual = prop.value !== "" && prop.parsed !== {};
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return this.getResult();
  }
}
