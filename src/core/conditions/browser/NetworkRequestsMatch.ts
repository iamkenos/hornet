import type { NetworkRequestsIncludedProps, NetworkRequestSnapshotOptions } from "@hornet/core/config";

import { merge } from "lodash";
import { JSONSnapshotMatch } from "@hornet/core/conditions/others/JSONSnapshotMatch";

export class NetworkRequestsMatch extends JSONSnapshotMatch {
  private readonly props: Array<keyof NetworkRequestsIncludedProps>;
  protected options: NetworkRequestSnapshotOptions;
  
  public constructor(filename: string, options?: NetworkRequestSnapshotOptions, not?: boolean) {
    super(filename, undefined, options, not);
    this.options = this.buildOptions(options);
    this.sortkey = "url";
    this.props = this.buildIncludedProps();
  }

  private buildOptions(options: NetworkRequestSnapshotOptions) {
    return merge({}, browser.config.snapshots.requests, options);
  }

  private buildIncludedProps() {
    return Object.entries(this.options.include)
      .filter((entry) => entry[1])
      .map((entry) => entry[0]) as typeof this.props;
  }

  public async getResult() {
    try {
      const { paths } = this.options;
      await browser.pause(1000);
      const requests = await browser.getRequests();
      const mapped = requests.map((request) => Object.fromEntries(this.props.map((value) => [value, request[value]])));
      const filtered = paths.length > 0 ? mapped.filter((entry: any) => paths.includes(new URL(entry.url).pathname)) : mapped;
      this.setComparable(filtered);
    } catch (e) {
      this.actual = e.message;
      this.passed = false;
    }

    return super.getResult();
  }
}
