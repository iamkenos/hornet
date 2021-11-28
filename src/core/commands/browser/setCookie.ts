export default async function (name: string, value: string) {
  await browser.setCookies({
    name: name,
    value: value
  });
};
