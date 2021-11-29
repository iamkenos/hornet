import { ExpectedConditions, CookieContains } from "@core/conditions";

export async function browserCookieToBeContaining(this: any, actual: WebdriverIO.Browser, cookie: string, expected: string) {
  const result = await new ExpectedConditions(browserCookieToBeContaining.name)
    .addCondition(new CookieContains(cookie, expected, !this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
