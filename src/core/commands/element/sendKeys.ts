export default async function (this: WebdriverIO.Element, keys: string | string[]) {
  this.focus();
  browser.pause(200);
  browser.keys(keys);
  browser.pause(200);
};
