export async function focus(this: WebdriverIO.Element) {
  await browser.execute((element: any) => element.focus(), this);
};
