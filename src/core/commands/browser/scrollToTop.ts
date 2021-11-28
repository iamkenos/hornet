export default async function () {
  await browser.execute((x, y) => window.scrollTo(x, y), 0, 0);
};
