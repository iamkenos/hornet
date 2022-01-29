import type { ImageSnapshotOptions } from "@core/conditions/types";
import { ImageCompareContext } from "@core/commands";
import { ExpectedCondition } from "@core/conditions/expectedCondition";
import { getImageDiff } from "@core/conditions";

export class SnapshotMatch extends ExpectedCondition {
  private readonly filename: string;
  private readonly options: ImageSnapshotOptions[ImageCompareContext];
  private readonly context: ImageCompareContext;

  public constructor(context: ImageCompareContext, filename: string, options?: ImageSnapshotOptions[ImageCompareContext], preferred?: boolean) {
    super(preferred);
    this.context = context;
    this.filename = filename;
    this.options = options;
  }

  public async evaluate() {
    try {
      const { skipCompare } = browser.config.snapshots.images;
      const element = this.selector ? await $(this.selector) : undefined;
      const result = await getImageDiff(this.filename, this.options, this.context, element);
      const within = result.error ? false : result.saveAboveTolerance > result.misMatchPercentage;
      this.expected = `Within ${result.saveAboveTolerance}% difference`;
      this.actual = result.error || `${result.misMatchPercentage}% difference`;
      this.passed = skipCompare ? true : this.preferred ? within : !within;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return this.getResult();
  }
}
