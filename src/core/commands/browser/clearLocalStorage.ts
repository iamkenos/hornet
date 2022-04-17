export async function clearLocalStorage() {
  await browser.execute(function(this: Window) { return this.localStorage.clear(); });
}
