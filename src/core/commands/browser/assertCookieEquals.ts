import { ExpectedConditions, CookieEquals } from "@core/conditions";

export default async function (cookie: string, expected: string, preferred = true) {
  await new ExpectedConditions()
    .addCondition(new CookieEquals(cookie, expected, preferred))
    .assert();
};
