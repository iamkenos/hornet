import { ImageCompareContext } from "@core/commands";
import { ExpectedConditions, SnapshotMatch, ImageSnapshotOptions } from "@core/conditions";

export async function browserSnapshotToMatch(this: any, actual: WebdriverIO.Browser, context: ImageCompareContext.PAGE | ImageCompareContext.VIEWPORT, filename: string, options?: ImageSnapshotOptions[ImageCompareContext.PAGE | ImageCompareContext.VIEWPORT]) {
  const result = await new ExpectedConditions(browserSnapshotToMatch.name)
    .addCondition(new SnapshotMatch(context, filename, options, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
