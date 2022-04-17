export async function scrollToTop() {
  await browser.execute((x, y) => window.scrollTo(x, y), 0, 0);
}
