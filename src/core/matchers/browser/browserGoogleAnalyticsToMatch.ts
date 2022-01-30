import type { NetworkRequestSnapshotOptions } from "@core/config";
import { ExpectedConditions, DocumentReady, GoogleAnalyticsMatch } from "@core/conditions";

export async function browserGoogleAnalyticsToMatch(this: any, actual: WebdriverIO.Browser, filename: string, event?: string, options?: NetworkRequestSnapshotOptions) {
  const result = await new ExpectedConditions(browserGoogleAnalyticsToMatch.name)
    .addCondition(new DocumentReady(true))
    .addCondition(new GoogleAnalyticsMatch(filename, event, options, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
