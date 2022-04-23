import type { PathComponent } from "jsonpath";
import type { JsonSnapshotOptions } from "@hornet/core/config";

import fs from "fs-extra";
import path from "path";
import jsonpath from "jsonpath";
import { diff } from "deep-diff";
import { orderBy } from "lodash";
import { AllureAdapter, BufferEncoding } from "@hornet/core/common";
import { ExpectedCondition } from "@hornet/core/conditions/expectedCondition";

export class JSONSnapshotMatch extends ExpectedCondition {
  protected readonly filename: string;
  protected options: JsonSnapshotOptions;
  protected sortkey: string;
  private comparable: any;

  public constructor(filename: string, comparable: any, options?: JsonSnapshotOptions, not?: boolean) {
    super(not);
    this.filename = filename + ".json";
    this.comparable = comparable;
    this.options = options;
    this.sortkey = undefined;
    this.on = this.filename;
  }

  public setComparable(comparable: any) {
    this.comparable = comparable;
    return this;
  }

  public setSortkey(sortkey: any) {
    this.sortkey = sortkey;
    return this;
  }

  private getMatchingJsonPaths(expressions: string[], from: object) {
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
  
  private compare(filename: string, options: JsonSnapshotOptions, object: any, sortKey?: string) {
    const { actualDir, baselineDir, diffDir, skipCompare, regex, prefilter } = options;
    const actualFile = path.join(actualDir, filename);
    const baselineFile = path.join(baselineDir, filename);
    const diffFile = path.join(diffDir, filename);
    let result: { differences: any; error?: any } = {} as any;
  
    try {
      fs.outputFileSync(actualFile, JSON.stringify(object, null, 2));
      let actual = JSON.parse(fs.readFileSync(actualFile, BufferEncoding.UTF8));
      let baseline = JSON.parse(fs.readFileSync(baselineFile, BufferEncoding.UTF8));
  
      if (sortKey) {
        actual = orderBy(actual, [sortKey]);
        baseline = orderBy(baseline, [sortKey]);
      }
  
      if (regex) {
        const paths = this.getMatchingJsonPaths(regex.paths, actual);
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
      AllureAdapter.attachJson("Actual", actualFile);
      !skipCompare && AllureAdapter.attachJson("Expected", baselineFile);
      !skipCompare && AllureAdapter.attachJson("Differences", diffFile);
      return result;
    }
  }

  protected async getResult() {
    try {
      const skipCompare = this.options.skipCompare;
      const diff = this.compare(this.filename, this.options, this.comparable, this.sortkey);
      const same = diff.error ? false : !diff.differences;
      this.actual = diff.error || diff.differences || "Match";
      this.expected = `Match${this.options?.regex || this.options?.prefilter ? " conditionally" : ""}`;
      this.passed = skipCompare ? true : same;
      this.not = skipCompare ? false : this.not;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
