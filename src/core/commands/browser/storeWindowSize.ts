export async function storeWindowSize() {
  browser.config.runtime.windowSize = await browser.getWindowSize();
}
