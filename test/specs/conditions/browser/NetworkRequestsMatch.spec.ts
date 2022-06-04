import { NetworkRequestsMatch } from "@conditions/browser/NetworkRequestsMatch";

import fs from "fs-extra";
import merge from "lodash/merge";
import path from "path";

import { BufferEncoding } from "@common/utils/enums";

import { givenBrowserConfig, givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";
const data = {
  any: "any",
  event: "click",
  netfile1: path.resolve(__dirname, "../../../fixtures/files/net-1.json"),
  netfile3: path.resolve(__dirname, "../../../fixtures/files/net-3.json"),
  options: () => {
    const options = merge({}, browser.config.snapshots.requests);
    options.outDir = "ouput";
    options.actualDir = options.outDir + "/actual";
    options.baselineDir = options.outDir + "/baseline";
    options.diffDir = options.outDir + "/diff";
    return options;
  },
};
let config: typeof browser.config;

jest.mock("fs-extra", () => ({ ...jest.requireActual("fs-extra") as any, outputFileSync: jest.fn(), readFileSync: jest.fn() }));
describe("@conditions: browser/NetworkRequestsMatch constructor", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new NetworkRequestsMatch(data.any, data.options());

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
      (condition as any).props,
    ];
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/NetworkRequestsMatch.buildIncludedProps()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should build the default included properties when filtering network requests", async() => {
    const condition = new NetworkRequestsMatch(data.any, data.options());

    const actual = await (condition as any).buildIncludedProps();
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/NetworkRequestsMatch.getResult()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should return a passed result", async() => {
    const condition = new NetworkRequestsMatch(data.any, data.options());
    const content = givenReadJSONFile();
    const browserMock = givenMock(browser.getRequests).mockReturnValue(JSON.parse(content));
    givenMock(fs.readFileSync).mockReturnValue(content);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
    expect(browserMock).toHaveBeenCalledTimes(1);
  });

  it("S02: should return a passed result if not is true", async() => {
    const condition = new NetworkRequestsMatch(data.any, data.options(), false);
    const content = givenReadJSONFile();
    givenMock(browser.getRequests).mockReturnValue(JSON.parse(content));
    givenMock(fs.readFileSync).mockReturnValueOnce(content).mockReturnValueOnce("[]");

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    const condition = new NetworkRequestsMatch(data.any, data.options());
    const content = givenReadJSONFile();
    givenMock(browser.getRequests).mockReturnValue(JSON.parse(content));
    givenMock(fs.readFileSync).mockReturnValueOnce(content).mockReturnValueOnce("[]");

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    const condition = new NetworkRequestsMatch(data.any, data.options());
    const content = givenReadJSONFile();
    givenMock(browser.getRequests).mockImplementation(() => { throw new Error("message"); });
    givenMock(fs.readFileSync).mockReturnValueOnce(content).mockReturnValueOnce("[]");

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S05: should apply filtering by paths", async() => {
    const condition = new NetworkRequestsMatch(data.any, { ...data.options(), include: { headers: true }, paths: ["/api/login"]});
    const content1 = givenReadJSONFile();
    const content2 = givenReadJSONFile(data.netfile3);
    const conditionSetComparableSpy = jest.spyOn(condition, "setComparable");
    givenMock(browser.getRequests).mockReturnValue(JSON.parse(content1));
    givenMock(fs.readFileSync).mockReturnValueOnce(content2).mockReturnValueOnce(content2);

    await (condition as any).getResult();
    expect(conditionSetComparableSpy).toHaveBeenCalledWith(JSON.parse(content2));
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
