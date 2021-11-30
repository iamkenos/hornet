export default async function () {
  return await browser.execute(function (this: any) { return this.localStorage.clear(); });
};
