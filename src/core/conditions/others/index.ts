import type { JsonSnapshotOptions } from "@core/config";

import { ExpectedConditions } from "../ExpectedConditions";
import { ArrayContains } from "./ArrayContains";
import { ArrayEquals } from "./ArrayEquals";
import { JSONSnapshotMatch } from "./JSONSnapshotMatch";
import { ObjectEquals } from "./ObjectEquals";
import { ObjectPropEquals } from "./ObjectPropEquals";

export class OtherConditions extends ExpectedConditions {
  public constructor() {
    super();
  }

  public arrayContains<T>(actual: Array<T>, expected: Array<T>, not?: boolean) {
   return this.addCondition(new ArrayContains(actual, expected, not));
  }

  public arrayEquals<T>(actual: Array<T>, expected: Array<T>, not?: boolean) {
   return this.addCondition(new ArrayEquals(actual, expected, not));
  }

  public jsonSnapshotMatch(filename: string, comparable: any, options?: JsonSnapshotOptions, not?: boolean) {
    return this.addCondition(new JSONSnapshotMatch(filename, comparable, options, not));
  }

  public objectEquals(actual: any, expected: any, not?: boolean) {
   return this.addCondition(new ObjectEquals(actual, expected, not));
  }

  public objectPropEquals(object: any, property: string, expected: any, not?: boolean) {
   return this.addCondition(new ObjectPropEquals(object, property, expected, not));
  }
}
