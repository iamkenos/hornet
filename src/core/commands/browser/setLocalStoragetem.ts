export default async function (key: string, value: string) {
  await browser.execute(function (this: any, key, value) { this.localStorage.setItem(key, value); }, key, value);
};
