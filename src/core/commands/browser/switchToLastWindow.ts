export async function switchToLastWindow() {
  const handles = await browser.getWindowHandles();
  const last = handles.slice(-1)[0];

  await browser.switchToWindow(last);
}
