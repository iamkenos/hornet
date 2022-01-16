import type { KVP } from "@core/commands";

export async function setSessionStorageItem(kvp: KVP) {
  await browser.execute(function (this: any, key: string, value: string) {
    this.sessionStorage.setItem(key, value);
  }, kvp.key, kvp.value);
}
