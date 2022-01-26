export async function clearLocalStorage() {
  await browser.execute(function (this: any) { return this.localStorage.clear(); });
};
