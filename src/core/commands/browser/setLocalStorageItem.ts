import type { KeyValuePair } from "@hornet/core/common";

export async function setLocalStorageItem(kvp: KeyValuePair) {
  await browser.execute(function(this: Window, key: string, value: string) {
    this.localStorage.setItem(key, value);
  }, kvp.key, kvp.value);
}
