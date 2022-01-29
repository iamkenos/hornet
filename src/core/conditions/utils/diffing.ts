import type { Capabilities } from "@wdio/types";
import type { ImageSnapshotOptions, ImageCompareResult } from "@core/conditions";

import allure from "@wdio/allure-reporter";
import fs, { rmSync } from "fs-extra";
import path from "path";

import { ImageCompareContext } from "@core/commands";
import { logger, MimeType } from "@core/common";

function buildImageCompareFilename(filename: string) {
  const { config } = browser;
  const { locale, snapshots } = config;
  const { images } = snapshots;
  const caps: Capabilities.DesiredCapabilities = browser.capabilities as any;
  const platform = (caps.platformName || caps.platform).slice(0, 3).toLowerCase();
  const name = caps.browserName.toLowerCase().replace(" ", "-");
  const version = caps.version || caps.browserVersion;
  const device = caps.deviceName?.toLowerCase();
  const baseDir = `${images.usePlatformDir ? `${locale}_${platform}` : locale}/${version ? name : `${name}_${device}`}`;
  return path.join(baseDir, filename + ".png");
}

function buildImageCompareOptions(options: ImageSnapshotOptions[keyof ImageSnapshotOptions]) {
  return {
    ...browser.config.snapshots.images.options,
    ...options,
  };
}

function bufferedImage(filename: string) {
  return Buffer.from(fs.readFileSync(filename) as any, "base64");
}

function attachImage(title: string, filename: string) {
  fs.existsSync(filename) && allure.addAttachment(`${title}: ${filename}`, bufferedImage(filename), MimeType.IMG_PNG);
}

export async function getImageDiff(
  filename: string,
  options: ImageSnapshotOptions[keyof ImageSnapshotOptions],
  context: ImageCompareContext,
  element?: WebdriverIO.Element
) {
  const { actualDir, baselineDir, diffDir, skipCompare } = browser.config.snapshots.images;
  const fullFilename = buildImageCompareFilename(filename);
  const fullOptions = buildImageCompareOptions(options);
  const tag = fullFilename.substring(0, fullFilename.lastIndexOf(".")); // because imagecompare methods appends it :/
  const actualFile = path.join(actualDir, fullFilename);
  const baselineFile = path.join(baselineDir, fullFilename);
  const diffFile = path.join(diffDir, fullFilename);
  let result: ImageCompareResult & typeof fullOptions & { error?: any } = {} as any;

  try {
    skipCompare && browser.pause(2000);
    switch (context) {
      case ImageCompareContext.PAGE: {
        result = (await browser.checkFullPageScreen(tag, fullOptions)) as any;
        break;
      }
      case ImageCompareContext.VIEWPORT: {
        result = (await browser.checkScreen(tag, fullOptions)) as any;
        break;
      }
      default: {
        result = (await browser.checkElement(element, tag, fullOptions)) as any;
        break;
      }
    }
  } catch (e) {
    result.error = e;
  } finally {
    result = { ...result, ...fullOptions, misMatchPercentage: result.misMatchPercentage || 0 };
    attachImage("Actual", actualFile);
    !skipCompare && attachImage("Expected", baselineFile);
    !skipCompare && attachImage("Differences", diffFile);
    return result;
  }
}
