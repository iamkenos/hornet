import { ExpectedConditions, CookieContains } from "@core/conditions";

export default async function (cookie: string, expected: string, preferred = true) {
  await new ExpectedConditions()
    .addCondition(new CookieContains(cookie, expected, preferred))
    .assert();
};
