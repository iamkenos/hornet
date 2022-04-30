export async function clearSessionStorage() {
  await browser.execute(function(this: Window) { return this.sessionStorage.clear(); });
}
