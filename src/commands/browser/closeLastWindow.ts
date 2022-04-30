export async function closeLastWindow() {
  const handles = await browser.getWindowHandles();
  const parent = handles[0];
  const last = handles.slice(-1)[0];

  await browser.switchToWindow(last);
  await browser.closeWindow();
  await browser.switchToWindow(parent);
}
