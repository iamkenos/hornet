export async function restoreWindowSize() {
  const { windowSize } = browser.config.runtime;
  await browser.setWindowSize(windowSize.width, windowSize.height);
}
