import { ExpectedConditions, CookieExists } from "@core/conditions";

export async function browserCookieToBeExisting(this: any, actual: WebdriverIO.Browser, cookie: string) {
  const result = await new ExpectedConditions(browserCookieToBeExisting.name)
    .addCondition(new CookieExists(cookie, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
