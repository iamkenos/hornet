import { JsonSnapshotOptions } from "@core/config";
import { ExpectedConditions, DocumentReady, JsonSnapshotMatch } from "@core/conditions";

export async function jsonSnapshotToMatch(this: any, actual: any, filename: string, options?: JsonSnapshotOptions) {
  const result = await new ExpectedConditions(jsonSnapshotToMatch.name)
    .addCondition(new DocumentReady(true))
    .addCondition(new JsonSnapshotMatch(filename, actual, options, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
