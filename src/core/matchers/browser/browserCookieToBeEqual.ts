import { ExpectedConditions, CookieEquals } from "@core/conditions";

export async function browserCookieToBeEqual(this: any, actual: WebdriverIO.Browser, cookie: string, expected: string) {
  const result = await new ExpectedConditions(browserCookieToBeEqual.name)
    .addCondition(new CookieEquals(cookie, expected, !this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
