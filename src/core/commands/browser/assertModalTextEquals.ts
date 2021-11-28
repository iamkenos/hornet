import { ExpectedConditions, ModalTextEquals } from "@core/conditions";

export default async function (expected: string, preferred = true) {
  await new ExpectedConditions()
    .addCondition(new ModalTextEquals(expected, preferred))
    .assert();
};
