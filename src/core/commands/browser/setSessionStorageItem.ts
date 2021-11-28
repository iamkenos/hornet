export default async function (key: string, value: string) {
  await browser.execute(function (this: any, key, value) { this.sessionStorage.setItem(key, value); }, key, value);
};
