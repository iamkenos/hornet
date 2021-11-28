import { ExpectedConditions, TitleEquals } from "@core/conditions";

export default async function (expected: string, preferred = true) {
  await new ExpectedConditions()
    .addCondition(new TitleEquals(expected, preferred))
    .assert();
};
