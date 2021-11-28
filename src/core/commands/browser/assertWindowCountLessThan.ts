import { ExpectedConditions, WindowCountLessThan } from "@core/conditions";

export default async function (expected: number, preferred = true) {
  await new ExpectedConditions()
    .addCondition(new WindowCountLessThan(expected, preferred))
    .assert();
};
