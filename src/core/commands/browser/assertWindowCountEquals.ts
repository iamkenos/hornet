import { ExpectedConditions, WindowCountEquals } from "@core/conditions";

export default async function (expected: number, preferred = true) {
  await new ExpectedConditions()
    .addCondition(new WindowCountEquals(expected, preferred))
    .assert();
};
