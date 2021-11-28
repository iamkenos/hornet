import { ExpectedConditions, UrlPathContains } from "@core/conditions";

export default async function (expected: string, preferred = true) {
  await new ExpectedConditions()
    .addCondition(new UrlPathContains(expected, preferred))
    .assert();
};
