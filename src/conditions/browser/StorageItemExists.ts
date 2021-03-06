import { BrowserStorage } from "@commands";
import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class StorageItemExists extends ExpectedCondition {
  private readonly key: string;
  private readonly isLocal: boolean;

  public constructor(context: BrowserStorage, key: string, preferred?: boolean) {
    super(preferred);
    this.expected = true;
    this.key = key;
    this.isLocal = context === BrowserStorage.LOCAL;
    this.on = `Storage Item (${context}): ${this.key}`;
  }

  protected async getResult() {
    try {
      this.actual = !!(this.isLocal ? await browser.getLocalStorageItem(this.key) : await browser.getSessionStorageItem(this.key));
      this.passed = this.actual === this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
