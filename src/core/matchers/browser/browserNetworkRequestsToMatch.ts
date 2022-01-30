import type { NetworkRequestSnapshotOptions } from "@core/config";
import { ExpectedConditions, DocumentReady, NetworkRequestsMatch } from "@core/conditions";

export async function browserNetworkRequestsToMatch(this: any, actual: WebdriverIO.Browser, filename: string, options?: NetworkRequestSnapshotOptions) {
  const result = await new ExpectedConditions(browserNetworkRequestsToMatch.name)
    .addCondition(new DocumentReady(true))
    .addCondition(new NetworkRequestsMatch(filename, options, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
