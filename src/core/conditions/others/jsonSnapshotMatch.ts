import type { JsonSnapshotOptions } from "@core/config";

import { ExpectedCondition } from "@core/conditions/expectedCondition";
import { getJsonDiff } from "@core/conditions";

export class JsonSnapshotMatch extends ExpectedCondition {
  protected readonly filename: string;
  protected options: JsonSnapshotOptions;
  protected sortkey: string;
  private comparable: any

  public constructor(filename: string, comparable: any, options?: JsonSnapshotOptions, preferred?: boolean) {
    super(preferred);
    this.filename = filename + ".json";
    this.comparable = comparable;
    this.options = options;
    this.sortkey = undefined;
  }

  public setComparable(comparable: any) {
    this.comparable = comparable;
    return this;
  }

  public setSortkey(sortkey: any) {
    this.sortkey = sortkey;
    return this;
  }

  public async evaluate() {
    try {
      const skipCompare = this.options.skipCompare;
      const result = await getJsonDiff(this.filename, this.options, this.comparable, this.sortkey);
      const isSame = result.error ? false : !result.differences;
      this.expected = `Match ${this.options?.regex || this.options?.prefilter ? "conditionally" : ""}`;
      this.actual = result.error || result.differences;
      this.passed = skipCompare ? true : this.preferred ? isSame : !isSame;
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return this.getResult();
  }
}
