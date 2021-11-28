import { ExpectedConditions, ArrayEquals, DocumentReady } from "@core/conditions";

export default async function (actual: any[], expected: any[], preferred = true) {
  await new ExpectedConditions()
    .addCondition(new DocumentReady(true))
    .addCondition(new ArrayEquals(actual, expected, preferred))
    .assert();
};
