import type { ImageSnapshotContextOptions } from "@hornet/core/conditions";
import type { NetworkRequestSnapshotOptions } from "@hornet/core/config";
import { BrowserStorage, ImageCompareContext } from "@hornet/core/commands";
import { OtherConditions } from "@hornet/core/conditions/others";

import { AlertExists } from "./AlertExists";
import { AlertTextContains } from "./AlertTextContains";
import { AlertTextEquals } from "./AlertTextEquals";
import { CookieContains } from "./CookieContains";
import { CookieEquals } from "./CookieEquals";
import { CookieExists } from "./CookieExists";
import { DocumentReady } from "./DocumentReady";
import { GoogleAnalyticsMatch } from "./GoogleAnalyticsMatch";
import { NetworkRequestsMatch } from "./NetworkRequestsMatch";
import { SnapshotMatch } from "./SnapshotMatch";
import { StorageItemContains } from "./StorageItemContains";
import { StorageItemEquals } from "./StorageItemEquals";
import { StorageItemExists } from "./StorageItemExists";
import { TitleContains } from "./TitleContains";
import { TitleEquals } from "./TitleEquals";
import { UrlContains } from "./UrlContains";
import { UrlEquals } from "./UrlEquals";
import { UrlPathContains } from "./UrlPathContains";
import { UrlPathEquals } from "./UrlPathEquals";
import { WindowCountEquals } from "./WindowCountEquals";
import { WindowCountLessThan } from "./WindowCountLessThan";
import { WindowCountMoreThan } from "./WindowCountMoreThan";

export class BrowserConditions extends OtherConditions {
  public constructor() {
    super();
  }

  public alertExists(not?: boolean) {
    return this.addCondition(new AlertExists(not));
  }

  public alertTextContains(expected: string, not?: boolean) {
    return this.addCondition(new AlertTextContains(expected, not));
  }

  public alertTextEquals(expected: string, not?: boolean) {
    return this.addCondition(new AlertTextEquals(expected, not));
  }

  public cookieContains(cookie: string, expected: string, not?: boolean) {
    return this.addCondition(new CookieContains(cookie, expected, not));
  }

  public cookieEquals(cookie: string, expected: string, not?: boolean) {
    return this.addCondition(new CookieEquals(cookie, expected, not));
  }

  public cookieExists(cookie: string, not?: boolean) {
    return this.addCondition(new CookieExists(cookie, not));
  }

  public ready(not?: boolean) {
    return this.addCondition(new DocumentReady(not));
  }

  public googleAnalyticsMatch(filename: string, event: string, options: NetworkRequestSnapshotOptions, not?: boolean) {
    return this.addCondition(new GoogleAnalyticsMatch(filename, event, options, not));
  }

  public networkRequestsMatch(filename: string, options: NetworkRequestSnapshotOptions, not?: boolean) {
    return this.addCondition(new NetworkRequestsMatch(filename, options, not));
  }

  public snapshotMatch(context: ImageCompareContext.PAGE | ImageCompareContext.VIEWPORT, filename: string, options?: ImageSnapshotContextOptions[ImageCompareContext.PAGE | ImageCompareContext.VIEWPORT], not?: boolean) {
    return this.addCondition(new DocumentReady()).addCondition(new SnapshotMatch(context, filename, options, not));
  }

  public storageItemContains(context: BrowserStorage, key: string, expected: string, not?: boolean) {
    return this.addCondition(new StorageItemContains(context, key, expected, not));
  }

  public storageItemEquals(context: BrowserStorage, key: string, expected: string, not?: boolean) {
    return this.addCondition(new StorageItemEquals(context, key, expected, not));
  }

  public storageItemExists(context: BrowserStorage, key: string, not?: boolean) {
    return this.addCondition(new StorageItemExists(context, key, not));
  }

  public titleContains(expected: string, not?: boolean) {
    return this.addCondition(new TitleContains(expected, not));
  }

  public titleEquals(expected: string, not?: boolean) {
    return this.addCondition(new TitleEquals(expected, not));
  }

  public urlContains(expected: string, not?: boolean) {
    return this.addCondition(new UrlContains(expected, not));
  }

  public urlEquals(expected: string, not?: boolean) {
    return this.addCondition(new UrlEquals(expected, not));
  }

  public urlPathContains(expected: string, not?: boolean) {
    return this.addCondition(new UrlPathContains(expected, not));
  }

  public urlPathEquals(expected: string, not?: boolean) {
    return this.addCondition(new UrlPathEquals(expected, not));
  }

  public windowCountEquals(expected: number, not?: boolean) {
    return this.addCondition(new WindowCountEquals(expected, not));
  }

  public windowCountLessThan(expected: number, not?: boolean) {
    return this.addCondition(new WindowCountLessThan(expected, not));
  }

  public windowCountMoreThan(expected: number, not?: boolean) {
    return this.addCondition(new WindowCountMoreThan(expected, not));
  }
}
