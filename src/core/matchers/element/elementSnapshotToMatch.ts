import { ImageCompareContext } from "@core/commands";
import { ExpectedConditions, SnapshotMatch, ImageSnapshotContextOptions } from "@core/conditions";

export async function elementSnapshotToMatch(this: any, actual: Promise<WebdriverIO.Element>, filename: string, options?: ImageSnapshotContextOptions[ImageCompareContext.ELEMENT]) {
  const selector = (await actual).selector;
  const result = await new ExpectedConditions(elementSnapshotToMatch.name, selector)
    .addCondition(new SnapshotMatch(ImageCompareContext.ELEMENT, filename, options, !this.isNot))
    .evaluate();

  return {
    message: () => result.getMessage(),
    pass: this.isNot ? !result.isPass() : result.isPass()
  };
}
