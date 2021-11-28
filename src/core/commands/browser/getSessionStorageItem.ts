export default async function (key: string) {
  return await browser.execute(function (this: any, key) { return this.sessionStorage.getItem(key); }, key);
};
