import { ExpectedConditions, DocumentReady } from "@core/conditions";

export default async function (preferred = true) {
  await new ExpectedConditions()
    .addCondition(new DocumentReady(preferred))
    .assert();
};
