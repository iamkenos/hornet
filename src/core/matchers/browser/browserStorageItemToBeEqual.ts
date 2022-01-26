import { BrowserStorage } from "@core/commands";
import { ExpectedConditions, StorageItemEquals } from "@core/conditions";

export async function browserStorageItemToBeEqual(this: any, actual: WebdriverIO.Browser, context: BrowserStorage, key: string, expected: string) {
  const result = await new ExpectedConditions(browserStorageItemToBeEqual.name)
    .addCondition(new StorageItemEquals(context, key, expected, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
