import { BrowserStorage } from "@core/commands";
import { ExpectedConditions, StorageItemExists } from "@core/conditions";

export async function browserStorageItemToBeExisting(this: any, actual: WebdriverIO.Browser, context: BrowserStorage, key: string) {
  const result = await new ExpectedConditions(browserStorageItemToBeExisting.name)
    .addCondition(new StorageItemExists(context, key, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
