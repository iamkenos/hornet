import { GoogleAnalyticsMatch } from "@conditions/browser/GoogleAnalyticsMatch";

import fs from "fs-extra";
import merge from "lodash/merge";
import path from "path";

import { JS_WINDOW_PERF_GET_ENTRIES } from "@commands/utils/constants";
import { BufferEncoding } from "@common/utils/enums";

import { givenBrowserConfig, givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";
const data = {
  any: "any",
  event: "click",
  netfile1: path.resolve(__dirname, "../../../fixtures/files/net-1.json"),
  netfile2: path.resolve(__dirname, "../../../fixtures/files/net-2.json"),
  options: () => {
    const options = merge({}, browser.config.snapshots.requests);
    options.outDir = "ouput";
    options.actualDir = options.outDir + "/actual";
    options.baselineDir = options.outDir + "/baseline";
    options.diffDir = options.outDir + "/diff";
    return options;
  },
  perfentries: [
    {
      name: "http://localhost:8080/index.html",
      initiatorType: "navigation",
    },
    {
      name: "https://cdnjs.cloudflare.com/ajax/libs/jquery-visible/1.2.0/jquery.visible.js",
      initiatorType: "script",
    },
    {
      name: "https://analytics.google.com/g/collect?v=2&tid=G-H65MR9RBXH&gtm=2oe520&_p=412221945&_z=ccd.tbB&_gaz=1&cid=1715266434.1635930503&ul=en&sr=2560x1440&_s=1&sid=1651648710&sct=52&seg=0&dl=https%3A%2F%2Fportal.foo%2F&dt=foo&en=page_view&_ss=1",
      initiatorType: "beacon",
    },
    {
      name: "https://analytics.google.com/g/collect?v=2&tid=G-H65MR9RBXH&gtm=2oe520&_p=412221945&_z=ccd.tbB&cid=1715266434.1635930503&ul=en&sr=2560x1440&_s=2&sid=1651648710&sct=52&seg=0&dl=https%3A%2F%2Fportal.foo%2F&dt=foo&en=scroll&_et=167&epn.percent_scrolled=90",
      initiatorType: "img",
    },
    {
      name: "https://analytics.google.com/g/collect?v=2&tid=G-H65MR9RBXH&gtm=2oe520&_p=412221945&_z=ccd.tbB&_gaz=1&cid=1715266434.1635930503&ul=en&sr=2560x1440&_s=1&sid=1651648710&sct=52&seg=0&dl=https%3A%2F%2Fportal.foo%2F&dt=foo&en=click&_ss=1",
      initiatorType: "xmlhttprequest",
    },
  ]
};
let config: typeof browser.config;

jest.mock("fs-extra", () => ({ ...jest.requireActual("fs-extra") as any, outputFileSync: jest.fn(), readFileSync: jest.fn() }));
describe("@conditions: browser/GoogleAnalyticsMatch constructor", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new GoogleAnalyticsMatch(data.any, data.event, data.options());

    const actual = [
      (condition as any).name,
      (condition as any).not,
      (condition as any).timeout,
      (condition as any).expected,
      (condition as any).actual,
      (condition as any).passed,
      (condition as any).result,
      (condition as any).on,
      (condition as any).element,
      (condition as any).filename,
      (condition as any).comparable,
      (condition as any).options,
      (condition as any).sortkey,
      (condition as any).domains,
      (condition as any).initiatorTypes,
      (condition as any).event,
    ];
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/GoogleAnalyticsMatch.filterGA()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should filter google analytics from browser perf entries", async() => {
    const condition = new GoogleAnalyticsMatch(data.any, undefined, data.options());

    const actual = await (condition as any).filterGA(data.perfentries);
    expect(actual).toMatchSnapshot();
  });

  it("S02: should filter specified event from filtered entries", async() => {
    const condition = new GoogleAnalyticsMatch(data.any, data.event, data.options());

    const actual = await (condition as any).filterGA(data.perfentries);
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/GoogleAnalyticsMatch.getResult()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should return a passed result", async() => {
    const condition = new GoogleAnalyticsMatch(data.any, data.event, data.options());
    const content = givenReadJSONFile();
    const browserMock = givenMock(browser.execute).mockReturnValue(data.perfentries);
    givenMock(fs.readFileSync).mockReturnValue(content);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
    expect(browserMock).toHaveBeenCalledWith(JS_WINDOW_PERF_GET_ENTRIES);
  });

  it("S02: should return a passed result if not is true", async() => {
    const condition = new GoogleAnalyticsMatch(data.any, data.event, data.options(), true);
    const content = givenReadJSONFile();
    givenMock(browser.execute).mockReturnValue(data.perfentries);
    givenMock(fs.readFileSync).mockReturnValueOnce(content).mockReturnValueOnce("[]");

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    const condition = new GoogleAnalyticsMatch(data.any, data.event, data.options());
    const content = givenReadJSONFile();
    givenMock(browser.execute).mockReturnValue(data.perfentries);
    givenMock(fs.readFileSync).mockReturnValueOnce(content).mockReturnValueOnce("[]");

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    const condition = new GoogleAnalyticsMatch(data.any, data.event, data.options());
    const content = givenReadJSONFile();
    givenMock(browser.execute).mockImplementation(() => { throw new Error("message"); });
    givenMock(fs.readFileSync).mockReturnValueOnce(content).mockReturnValueOnce("[]");

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });
});

function givenBrowserConfigIsDefined() {
  config = givenBrowserConfig();
  browser.config = config;
}

function givenBrowserConfigIsUndefined() {
  config = undefined;
  browser.config = config;
}

function givenReadJSONFile(file = data.netfile1) {
  return jest.requireActual("fs").readFileSync(file, BufferEncoding.UTF8);
}
