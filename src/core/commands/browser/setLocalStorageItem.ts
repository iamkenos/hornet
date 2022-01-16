import type { KVP } from "@core/common";

export async function setLocalStorageItem(kvp: KVP) {
  await browser.execute(function (this: any, key: string, value: string) {
    this.localStorage.setItem(key, value);
  }, kvp.key, kvp.value);
}
