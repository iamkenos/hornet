import { BrowserStorage } from "@core/commands";
import { ExpectedCondition } from "@core/conditions/expectedCondition";

export class StorageItemEquals extends ExpectedCondition {
  private readonly key: string;
  private readonly isLocal: boolean;

  public constructor(context: BrowserStorage, key: string, expected: string, preferred?: boolean) {
    super(preferred);
    this.expected = expected || "";
    this.key = key;
    this.isLocal = context === BrowserStorage.LOCAL;
    this.messageHeader = `Storage Item (${context}): ${this.key}`;
  }

  public async evaluate() {
    try {
      this.actual = this.isLocal ? await browser.getLocalStorageItem(this.key) : await browser.getSessionStorageItem(this.key);
      this.passed = this.preferred ? this.actual === this.expected : this.actual !== this.expected;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return this.getResult();
  }
}
