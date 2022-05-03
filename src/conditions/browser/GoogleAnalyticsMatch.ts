import type { NetworkRequestSnapshotOptions } from "@config";

import qs from "query-string";
import merge from "lodash/merge";
import { JS_WINDOW_PERF_GET_ENTRIES } from "@commands";
import { JSONSnapshotMatch } from "@iamkenos/hornet/conditions/others/JSONSnapshotMatch";

type BrowserPerformanceEntry = {
  cancelable?: boolean;
  connectEnd?: number;
  connectStart?: number;
  decodedBodySize?: number;
  domainLookupEnd?: number;
  domainLookupStart?: number;
  duration?: number;
  encodedBodySize?: number;
  entryType?: string;
  fetchStart?: number;
  initiatorType: "css" | "xmlhttprequest" | "img" | "navigation" | "link" | "script";
  name: string;
  nextHopProtocol?: string;
  redirectEnd?: number;
  redirectStart?: number;
  requestStart?: number;
  responseEnd?: number;
  responseStart?: number;
  secureConnectionStart?: number;
  serverTiming?: number[];
  startTime?: number;
  transferSize?: number;
  workerStart?: number;
  workerTiming?: number[];
};

export class GoogleAnalyticsMatch extends JSONSnapshotMatch {
  protected declare options: NetworkRequestSnapshotOptions;
  private readonly url: string;
  private readonly initiatorTypes: string[];
  private readonly event: string;

  public constructor(filename: string, event: string, options?: NetworkRequestSnapshotOptions, not?: boolean) {
    super(filename, undefined, options, not);
    this.options = this.buildOptions(options);
    this.url = "www.google-analytics.com";
    this.initiatorTypes = ["xmlhttprequest", "img", "beacon"];
    this.event = event;
  }

  private buildOptions(options: NetworkRequestSnapshotOptions) {
    return merge({}, browser.config.snapshots.requests, options);
  }

  private filterGA(entries: BrowserPerformanceEntry[]) {
    const filtered = entries
      .filter((e) => e.name.includes(this.url) && this.initiatorTypes.includes(e.initiatorType))
      .map((e) => qs.parseUrl(e.name))
      .map((e: qs.ParsedUrl) => ({
        url: e.url,
        query: e.query
      }));
    if (this.event) {
      return filtered.filter((e) => (e.query.ec === this.event || e.query.en === this.event));
    }
    return filtered;
  }

  protected async getResult() {
    try {
      const requests = await browser.execute(JS_WINDOW_PERF_GET_ENTRIES) as any;
      const filtered = this.filterGA(requests);
      this.setComparable(filtered);
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
