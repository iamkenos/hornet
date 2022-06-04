import type { JSONSnapshotOptions } from "@config";

import { ExpectedConditions } from "../ExpectedConditions";
import { ArrayContains } from "./ArrayContains";
import { ArrayEquals } from "./ArrayEquals";
import { JSONSnapshotMatch } from "./JSONSnapshotMatch";
import { ObjectEquals } from "./ObjectEquals";
import { ObjectPropEquals } from "./ObjectPropEquals";
import { StringContains } from "./StringContains";
import { StringEquals } from "./StringEquals";

export class OtherConditions extends ExpectedConditions {
  public constructor() {
    super();
  }

  public arrayContains<T>(actual: Array<T>, expected: Array<T>, preferred?: boolean) {
    return this.addCondition(new ArrayContains(actual, expected, preferred));
  }

  public arrayEquals<T>(actual: Array<T>, expected: Array<T>, preferred?: boolean) {
    return this.addCondition(new ArrayEquals(actual, expected, preferred));
  }

  public jsonSnapshotMatch(filename: string, comparable: any, options?: JSONSnapshotOptions, preferred?: boolean) {
    return this.addCondition(new JSONSnapshotMatch(filename, comparable, options, preferred));
  }

  public objectEquals(actual: any, expected: any, preferred?: boolean) {
    return this.addCondition(new ObjectEquals(actual, expected, preferred));
  }

  public objectPropEquals<T>(object: any, property: keyof T, expected: any, preferred?: boolean) {
    return this.addCondition(new ObjectPropEquals<T>(object, property, expected, preferred));
  }

  public stringContains(actual: string, expected: string, preferred?: boolean) {
    return this.addCondition(new StringContains(actual, expected, preferred));
  }

  public stringEquals(actual: string, expected: string, preferred?: boolean) {
    return this.addCondition(new StringEquals(actual, expected, preferred));
  }
}
