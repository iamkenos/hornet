import { ExpectedConditions, TitleContains } from "@core/conditions";

export default async function (expected: string, preferred = true) {
  await new ExpectedConditions()
    .addCondition(new TitleContains(expected, preferred))
    .assert();
};
