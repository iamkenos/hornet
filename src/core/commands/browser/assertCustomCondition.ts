import type { CustomConditionFunction } from "@core/conditions/types";
import { ExpectedConditions, CustomCondition } from "@core/conditions";

export default async function (condition: CustomConditionFunction, preferred = true) {
  await new ExpectedConditions()
    .addCondition(new CustomCondition(condition, preferred))
    .assert();
};
