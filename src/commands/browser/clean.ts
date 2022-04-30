export async function clean() {
  await browser.clearLocalStorage();
  await browser.clearSessionStorage();
  await browser.deleteCookies();
}
