import { ExpectedConditions, UrlContains } from "@core/conditions";

export default async function (expected: string, preferred = true) {
  await new ExpectedConditions()
    .addCondition(new UrlContains(expected, preferred))
    .assert();
};
