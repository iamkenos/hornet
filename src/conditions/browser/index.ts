import type { ImageSnapshotContextOptions } from "@conditions";
import type { NetworkRequestSnapshotOptions } from "@config";
import { BrowserStorage, ImageCompareContext } from "@commands";
import { OtherConditions } from "@conditions/others";

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

  public alertExists(preferred?: boolean) {
    return this.addCondition(new AlertExists(preferred));
  }

  public alertTextContains(expected: string, preferred?: boolean) {
    return this.addCondition(new AlertTextContains(expected, preferred));
  }

  public alertTextEquals(expected: string, preferred?: boolean) {
    return this.addCondition(new AlertTextEquals(expected, preferred));
  }

  public cookieContains(cookie: string, expected: string, preferred?: boolean) {
    return this.addCondition(new CookieContains(cookie, expected, preferred));
  }

  public cookieEquals(cookie: string, expected: string, preferred?: boolean) {
    return this.addCondition(new CookieEquals(cookie, expected, preferred));
  }

  public cookieExists(cookie: string, preferred?: boolean) {
    return this.addCondition(new CookieExists(cookie, preferred));
  }

  public ready(preferred?: boolean) {
    return this.addCondition(new DocumentReady(preferred));
  }

  public googleAnalyticsMatch(filename: string, event: string, options?: NetworkRequestSnapshotOptions, preferred?: boolean) {
    return this.addCondition(new GoogleAnalyticsMatch(filename, event, options, preferred));
  }

  public networkRequestsMatch(filename: string, options?: NetworkRequestSnapshotOptions, preferred?: boolean) {
    return this.addCondition(new NetworkRequestsMatch(filename, options, preferred));
  }

  public snapshotMatch(context: ImageCompareContext.PAGE | ImageCompareContext.VIEWPORT, filename: string, options?: ImageSnapshotContextOptions[ImageCompareContext.PAGE | ImageCompareContext.VIEWPORT], preferred?: boolean) {
    return this.addCondition(new DocumentReady()).addCondition(new SnapshotMatch(context, filename, options, preferred));
  }

  public storageItemContains(context: BrowserStorage, key: string, expected: string, preferred?: boolean) {
    return this.addCondition(new StorageItemContains(context, key, expected, preferred));
  }

  public storageItemEquals(context: BrowserStorage, key: string, expected: string, preferred?: boolean) {
    return this.addCondition(new StorageItemEquals(context, key, expected, preferred));
  }

  public storageItemExists(context: BrowserStorage, key: string, preferred?: boolean) {
    return this.addCondition(new StorageItemExists(context, key, preferred));
  }

  public titleContains(expected: string, preferred?: boolean) {
    return this.addCondition(new TitleContains(expected, preferred));
  }

  public titleEquals(expected: string, preferred?: boolean) {
    return this.addCondition(new TitleEquals(expected, preferred));
  }

  public urlContains(expected: string, preferred?: boolean) {
    return this.addCondition(new UrlContains(expected, preferred));
  }

  public urlEquals(expected: string, preferred?: boolean) {
    return this.addCondition(new UrlEquals(expected, preferred));
  }

  public urlPathContains(expected: string, preferred?: boolean) {
    return this.addCondition(new UrlPathContains(expected, preferred));
  }

  public urlPathEquals(expected: string, preferred?: boolean) {
    return this.addCondition(new UrlPathEquals(expected, preferred));
  }

  public windowCountEquals(expected: number, preferred?: boolean) {
    return this.addCondition(new WindowCountEquals(expected, preferred));
  }

  public windowCountLessThan(expected: number, preferred?: boolean) {
    return this.addCondition(new WindowCountLessThan(expected, preferred));
  }

  public windowCountMoreThan(expected: number, preferred?: boolean) {
    return this.addCondition(new WindowCountMoreThan(expected, preferred));
  }
}
