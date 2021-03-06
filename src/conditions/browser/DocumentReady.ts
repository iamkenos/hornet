import { JS_DOCUMENT_READY_STATE } from "@commands";
import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class DocumentReady extends ExpectedCondition {
  public constructor(preferred?: boolean) {
    super(preferred);
    this.expected = "complete";
  }

  protected async getResult() {
    try {
      this.actual = await browser.execute(JS_DOCUMENT_READY_STATE);
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
