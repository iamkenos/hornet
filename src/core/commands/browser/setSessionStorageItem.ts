import type { KeyValuePair } from "@core/common";

export async function setSessionStorageItem(kvp: KeyValuePair) {
  await browser.execute(function(this: Window, key: string, value: string) {
    this.sessionStorage.setItem(key, value);
  }, kvp.key, kvp.value);
}
