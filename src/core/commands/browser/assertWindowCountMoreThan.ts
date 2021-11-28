import { ExpectedConditions, WindowCountMoreThan } from "@core/conditions";

export default async function (expected: number, preferred = true) {
  await new ExpectedConditions()
    .addCondition(new WindowCountMoreThan(expected, preferred))
    .assert();
};
