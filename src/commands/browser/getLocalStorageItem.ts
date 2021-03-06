export async function getLocalStorageItem(key: string) {
  return await browser.execute(function(this: Window, key: string) { return this.localStorage.getItem(key); }, key);
}
