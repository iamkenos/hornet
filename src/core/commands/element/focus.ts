export async function focus(this: WebdriverIO.Element) {
  await browser.execute((element: WebdriverIO.Element) => element.focus(), this);
}
