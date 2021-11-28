import { ExpectedConditions, UrlEquals } from "@core/conditions";

export default async function (expected: string, preferred = true) {
  await new ExpectedConditions()
    .addCondition(new UrlEquals(expected, preferred))
    .assert();
};
