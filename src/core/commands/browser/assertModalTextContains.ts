import { ExpectedConditions, ModalTextContains } from "@core/conditions";

export default async function (expected: string, preferred = true) {
  await new ExpectedConditions()
    .addCondition(new ModalTextContains(expected, preferred))
    .assert();
};
