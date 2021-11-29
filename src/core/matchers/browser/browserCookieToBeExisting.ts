import { ExpectedConditions, CookieExists } from "@core/conditions";

export async function browserCookieToBeExisting(this: any, actual: WebdriverIO.Browser, cookie: string) {
  const result = await new ExpectedConditions(browserCookieToBeExisting.name)
    .addCondition(new CookieExists(cookie, !this.isNot))
    .wait();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isSuccess() : result.isSuccess()
  };
}
