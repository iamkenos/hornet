export async function clearSessionStorage() {
  await browser.execute(function (this: any) { return this.sessionStorage.clear(); });
};
