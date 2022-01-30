import type { ImageSnapshotOptions } from "@core/config";
import type { Capabilities } from "@wdio/types";

import path from "path";
import { merge } from "lodash";
import { ImageCompareContext } from "@core/commands";
import { ExpectedCondition } from "@core/conditions/expectedCondition";
import { getImageDiff } from "@core/conditions";

export class SnapshotMatch extends ExpectedCondition {
  private readonly filename: string;
  private readonly options: ImageSnapshotOptions;
  private readonly context: ImageCompareContext;

  public constructor(
    context: ImageCompareContext,
    filename: string,
    options?: ImageSnapshotOptions,
    preferred?: boolean
  ) {
    super(preferred);
    this.context = context;
    this.filename = this.buildFilename(filename);
    this.options = this.buildOptions(options);
    this.expected = `Within ${this.options.saveAboveTolerance}% difference`;
  }

  private buildFilename(filename: string) {
    const { config } = browser;
    const { locale, snapshots } = config;
    const { images } = snapshots;
    const caps: Capabilities.DesiredCapabilities = browser.capabilities as any;
    const platform = (caps.platformName || caps.platform).slice(0, 3).toLowerCase();
    const name = caps.browserName.toLowerCase().replace(" ", "-");
    const ver = caps.version || caps.browserVersion;
    const device = caps.deviceName?.toLowerCase();
    const baseDir = `${images.usePlatformDir ? `${locale}_${platform}` : locale}/${ver ? name : `${name}_${device}`}`;
    return path.join(baseDir, filename + ".png");
  }

  private buildOptions(options: ImageSnapshotOptions) {
    return merge({}, browser.config.snapshots.images, options);
  }

  public async evaluate() {
    try {
      const { skipCompare } = this.options;
      const element = this.selector ? await $(this.selector) : undefined;
      const result = await getImageDiff(this.filename, this.options, this.context, element);
      const isSame = result.error ? false : this.options.saveAboveTolerance > result.misMatchPercentage;
      this.actual = result.error || `${result.misMatchPercentage}% difference`;
      this.passed = skipCompare ? true : this.preferred ? isSame : !isSame;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return this.getResult();
  }
}
