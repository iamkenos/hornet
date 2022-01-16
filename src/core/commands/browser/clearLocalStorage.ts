export async function clearLocalStorage() {
  return await browser.execute(function (this: any) { return this.localStorage.clear(); });
};
