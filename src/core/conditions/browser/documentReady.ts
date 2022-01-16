import { JS_DOCUMENT_READY_STATE } from "@core/commands";
import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class DocumentReady extends ExpectedCondition {
  public constructor(preferred?: boolean) {
    super(preferred);
    this.expected = "complete";
  }

  public async evaluate() {
    try {
      this.actual = await browser.execute(JS_DOCUMENT_READY_STATE);
      this.passed = this.preferred ? this.actual === this.expected : this.actual !== this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return this.getResult();
  }
}
