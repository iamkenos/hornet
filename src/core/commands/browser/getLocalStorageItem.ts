export default async function (key: string) {
  return await browser.execute(function (this: any, key) { return this.localStorage.getItem(key); }, key);
};
