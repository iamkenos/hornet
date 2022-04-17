export async function closeOtherWindows() {
  let handles = await browser.getWindowHandles();
  const parent = handles[0];

  while (handles.length > 1) {
    const last = handles.slice(-1)[0];

    await browser.switchToWindow(last);
    await browser.closeWindow();
    await browser.switchToWindow(parent);
    handles = await browser.getWindowHandles();
  }
}
