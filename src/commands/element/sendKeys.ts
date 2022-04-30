export async function sendKeys(this: WebdriverIO.Element, keys: string | string[]) {
  await this.focus();
  await browser.pause(200);
  await browser.keys(keys);
  await browser.pause(200);
}
