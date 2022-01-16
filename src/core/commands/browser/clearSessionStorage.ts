export async function clearSessionStorage() {
  return await browser.execute(function (this: any) { return this.sessionStorage.clear(); });
};
