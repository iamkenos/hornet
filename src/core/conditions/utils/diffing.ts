import type { ImageCompareResult } from "@core/conditions";
import type { JsonSnapshotOptions, ImageSnapshotOptions } from "@core/config";
import { ImageCompareContext } from "@core/commands";
import { attachImage, attachJson, readFileSync } from "@core/common";
import { diff } from "deep-diff";
import { orderBy } from "lodash";
import jsonpath, { PathComponent } from "jsonpath";
import fs from "fs-extra";
import path from "path";

function getMatchingJsonPaths(expressions: string[], from: object) {
  // Get all the matching stringified json paths from an object given a list of json paths
  // see https://www.npmjs.com/package/jsonpath
  return (
    expressions
      // 2D array of element paths from comparable
      // that matches the path expressions provided
      .map((expression) => jsonpath.paths(from, expression))
      // Flatten the 2D array
      .reduce((j, k) => j.concat(k))
      // Stringify the each json path array
      // e.g. ['$', 'store', 'book', 0, 'author'] to "$.store.book[0].author"
      .map((h: PathComponent[]) => jsonpath.stringify(h))
  );
}

export function getJsonDiff(filename: string, options: JsonSnapshotOptions, object: any, sortKey?: string) {
  const { actualDir, baselineDir, diffDir, skipCompare, regex, prefilter } = options;
  const actualFile = path.join(actualDir, filename);
  const baselineFile = path.join(baselineDir, filename);
  const diffFile = path.join(diffDir, filename);
  let result: { differences: any; error?: any } = {} as any;

  try {
    fs.outputFileSync(actualFile, JSON.stringify(object, null, 2));
    let actual = JSON.parse(readFileSync(actualFile));
    let baseline = JSON.parse(readFileSync(baselineFile));

    if (sortKey) {
      actual = orderBy(actual, [sortKey]);
      baseline = orderBy(baseline, [sortKey]);
    }

    if (regex) {
      const paths = getMatchingJsonPaths(regex.paths, actual);
      result.differences = diff(baseline, actual, (filterPath, key) => {
        const filter = jsonpath.stringify(["$"].concat(filterPath.concat(key)));
        const index = paths.indexOf(filter);
        let isSame = false;
        // if filter is inside the paths array, get the expression on the same index
        // and check that it matches the actual value; else let diff do it's thing
        if (index >= 0) {
          const pathValue = JSON.stringify(jsonpath.query(actual, filter)[0]);
          const matchExpr = regex.expressions[index];
          const matches = pathValue.match(matchExpr) || [];
          isSame = matches.length > 0;
        }
        return isSame;
      });
    } else {
      result.differences = diff(baseline, actual, prefilter);
    }
    if (result.differences) {
      const formatted = JSON.stringify(result.differences, null, 2);
      fs.outputFileSync(diffFile, formatted);
      result.differences = formatted;
    }
  } catch (e) {
    result.error = e;
  } finally {
    result = { differences: "", ...result };
    attachJson("Actual", actualFile);
    !skipCompare && attachJson("Expected", baselineFile);
    !skipCompare && attachJson("Differences", diffFile);
    return result;
  }
}

export async function getImageDiff(
  filename: string,
  options: ImageSnapshotOptions,
  context: ImageCompareContext,
  element?: WebdriverIO.Element
) {
  const { actualDir, baselineDir, diffDir, skipCompare } = options;
  const tag = filename.substring(0, filename.lastIndexOf(".")); // because imagecompare methods appends it :/
  const actualFile = path.join(actualDir, filename);
  const baselineFile = path.join(baselineDir, filename);
  const diffFile = path.join(diffDir, filename);
  let result: ImageCompareResult & { error?: any } = {} as any;

  try {
    skipCompare && browser.pause(2000);
    switch (context) {
      case ImageCompareContext.PAGE: {
        result = (await browser.checkFullPageScreen(tag, options)) as any;
        break;
      }
      case ImageCompareContext.VIEWPORT: {
        result = (await browser.checkScreen(tag, options)) as any;
        break;
      }
      default: {
        result = (await browser.checkElement(element, tag, options)) as any;
        break;
      }
    }
  } catch (e) {
    result.error = e;
  } finally {
    result = { misMatchPercentage: 0, ...result };
    attachImage("Actual", actualFile);
    !skipCompare && attachImage("Expected", baselineFile);
    !skipCompare && attachImage("Differences", diffFile);
    return result;
  }
}
