export async function getSessionStorageItem(key: string) {
  return await browser.execute(function (this: any, key: string) { return this.sessionStorage.getItem(key); }, key);
};
