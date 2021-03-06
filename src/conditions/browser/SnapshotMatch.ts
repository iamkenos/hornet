import type { ImageCompareResult } from "@conditions";
import type { ImageSnapshotOptions } from "@config";
import type { Capabilities } from "@wdio/types";

import path from "path";
import merge from "lodash/merge";
import { ImageCompareContext } from "@commands";
import { AllureAdapter } from "@common";
import { ExpectedCondition } from "@conditions/ExpectedCondition";

export class SnapshotMatch extends ExpectedCondition {
  private readonly filename: string;
  private readonly options: ImageSnapshotOptions;
  private readonly context: ImageCompareContext;

  public constructor(context: ImageCompareContext, filename: string, options?: ImageSnapshotOptions, preferred?: boolean) {
    super(preferred);
    this.context = context;
    this.options = this.buildOptions(options);
    this.filename = this.buildFilename(filename);
    this.expected = `Within ${this.options.saveAboveTolerance}% difference`;
    this.on = this.filename;
  }

  private buildFilename(filename: string) {
    const { locale } = browser.config;
    const caps: Capabilities.DesiredCapabilities = browser.capabilities as any;
    const platform = (caps.platformName || caps.platform).slice(0, 3).toLowerCase();
    const name = caps.browserName.toLowerCase().replace(" ", "-");
    const ver = caps.version || caps.browserVersion;
    const device = caps.deviceName?.toLowerCase();
    const baseDir = `${this.options.usePlatformDir ? `${locale}_${platform}` : locale}/${ver ? name : `${name}_${device}`}`;
    return path.join(baseDir, filename + ".png");
  }

  private buildOptions(options: ImageSnapshotOptions) {
    return merge({}, browser.config.snapshots.images, options);
  }

  private async compare(filename: string, options: ImageSnapshotOptions, context: ImageCompareContext, element?: WebdriverIO.Element) {
    const { actualDir, baselineDir, diffDir, skipCompare } = options;
    const tag = filename.substring(0, filename.lastIndexOf(".")); // because image compare appends the file xtension :/
    const actualFile = path.join(actualDir, filename);
    const baselineFile = path.join(baselineDir, filename);
    const diffFile = path.join(diffDir, filename);
    let result: ImageCompareResult & { error?: any } = {} as any;

    try {
      skipCompare && await browser.pause(2000);
      switch (context) {
        case ImageCompareContext.PAGE: {
          result = await browser.checkFullPageScreen(tag, options) as any;
          break;
        }
        case ImageCompareContext.VIEWPORT: {
          result = await browser.checkScreen(tag, options) as any;
          break;
        }
        default: {
          await element.scrollIntoView();
          result = await browser.checkElement(element, tag, options) as any;
          break;
        }
      }
    } catch (e) {
      result.error = e;
    } finally {
      result = { misMatchPercentage: 0, ...result };
      AllureAdapter.attachImage("Actual", actualFile);
      !skipCompare && AllureAdapter.attachImage("Expected", baselineFile);
      !skipCompare && AllureAdapter.attachImage("Differences", diffFile);
      return result;
    }
  }

  protected async getResult() {
    try {
      const skipCompare = this.options.skipCompare;
      const diff = await this.compare(this.filename, this.options, this.context, this.element);
      const same = diff.error ? false : diff.misMatchPercentage <= this.options.saveAboveTolerance;
      this.actual = diff.error || `${diff.misMatchPercentage}% difference`;
      this.passed = skipCompare ? true : same;
      this.not = skipCompare ? false : this.not;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
