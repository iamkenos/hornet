export async function switchToParentWindow() {
  const handles = await browser.getWindowHandles();
  const parent = handles[0];

  await browser.switchToWindow(parent);
};
