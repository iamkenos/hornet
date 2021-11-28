import { ExpectedConditions, ModalExists, DocumentReady } from "@core/conditions";

export default async function (preferred = true) {
  await new ExpectedConditions()
    .addCondition(new DocumentReady(true))
    .addCondition(new ModalExists(preferred))
    .assert();
};
