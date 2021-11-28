import { ExpectedConditions, CookieExists } from "@core/conditions";

export default async function (cookie: string, preferred = true) {
  await new ExpectedConditions()
    .addCondition(new CookieExists(cookie, preferred))
    .assert();
};
