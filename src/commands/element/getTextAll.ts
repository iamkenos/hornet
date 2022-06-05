export async function getTextAll(this: WebdriverIO.Element) {
  const elements = await this.$$(this.selector);
  const getText = async(element: WebdriverIO.Element) => await element.getText();
  return await Promise.all(elements.map((element) => getText(element)));
}
