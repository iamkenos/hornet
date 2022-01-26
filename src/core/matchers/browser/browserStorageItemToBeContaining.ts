import { BrowserStorage } from "@core/commands";
import { ExpectedConditions, StorageItemContains } from "@core/conditions";

export async function browserStorageItemToBeContaining(this: any, actual: WebdriverIO.Browser, context: BrowserStorage, key: string, expected: string) {
  const result = await new ExpectedConditions(browserStorageItemToBeContaining.name)
    .addCondition(new StorageItemContains(context, key, expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
