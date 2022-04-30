export async function setCookie(name: string, value: string) {
  await browser.setCookies({
    name: name,
    value: value
  });
}
