import type { HttpRequestOptions }  from "@core/commands";
import type { JsonSnapshotOptions }  from "@core/config";
import { merge }  from "lodash";
import { isJson }  from "@core/common";
import { ExpectedConditions, DocumentReady, JsonSnapshotMatch } from "@core/conditions";

export async function browserHttpResponseToMatch(this: any, actual: WebdriverIO.Browser, filename: string, request: HttpRequestOptions, options?: JsonSnapshotOptions) {
  const merged = merge({}, browser.config.snapshots.responses, options);
  const response = await actual.sendRequest(request.url as string, request);
  const comparable = { statusCode: response.statusCode, body: isJson(response.body) ? JSON.parse(response.body) : response.body };
  const result = await new ExpectedConditions(browserHttpResponseToMatch.name)
    .addCondition(new DocumentReady(true))
    .addCondition(new JsonSnapshotMatch(filename, comparable, merged, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
