export default async function (this: WebdriverIO.Element) {
  await browser.execute((element: any) => element.focus(), this);
};
