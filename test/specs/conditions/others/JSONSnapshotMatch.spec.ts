import { JSONSnapshotMatch } from "@conditions/others/JSONSnapshotMatch";

import fs from "fs-extra";
import merge from "lodash/merge";
import path from "path";

import { BufferEncoding } from "@common/utils/enums";

import { givenBrowserConfig, givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";
const data = {
  any: "any",
  netfile1: path.resolve(__dirname, "../../../fixtures/files/net-1.json"),
  netfile2: path.resolve(__dirname, "../../../fixtures/files/net-2.json"),
  options: () => {
    const options = merge({}, browser.config.snapshots.requests);
    options.outDir = "ouput";
    options.actualDir = options.outDir + "/actual";
    options.baselineDir = options.outDir + "/baseline";
    options.diffDir = options.outDir + "/diff";
    return options;
  }
};
let config: typeof browser.config;

jest.mock("fs-extra", () => ({ ...jest.requireActual("fs-extra") as any, outputFileSync: jest.fn(), readFileSync: jest.fn() }));
describe("@conditions: others/JSONSnapshotMatch constructor", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new JSONSnapshotMatch(data.any, data, data.options());

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
      (condition as any).sortkey
    ];
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: others/JSONSnapshotMatch.setComparable()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should set the comparable", async() => {
    const condition = new JSONSnapshotMatch(data.any, data, data.options());
    const content = givenReadJSONFile();
    const comparable = JSON.parse(content);

    condition.setComparable(comparable);
    const actual = (condition as any).comparable;
    const expected = comparable;
    expect(actual).toEqual(expected);
  });
});

describe("@conditions: others/JSONSnapshotMatch.setSortkey()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should set the sort key", async() => {
    const condition = new JSONSnapshotMatch(data.any, data, data.options());
    const content = givenReadJSONFile();
    const comparable = JSON.parse(content);

    condition.setComparable(comparable);
    condition.setSortkey(data.any);
    const actual = (condition as any).sortkey;
    const expected = data.any;
    expect(actual).toEqual(expected);
  });
});

describe("@conditions: others/JSONSnapshotMatch.getMatchingJSONPaths()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should return matching json paths given an array of expressions and an object to read from", async() => {
    const condition = new JSONSnapshotMatch(data.any, data, data.options());
    const content = givenReadJSONFile();
    const comparable = JSON.parse(content);
    const paths = ["$[0].method", "$[0].foo"];

    const actual = (condition as any).getMatchingJSONPaths(paths, comparable);
    const expected = [paths[0]];
    expect(actual).toEqual(expected);
  });
});

describe("@conditions: others/JSONSnapshotMatch.getResult()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should return a passed result", async() => {
    const condition = new JSONSnapshotMatch(data.any, data, data.options());
    const content = givenReadJSONFile();
    const fsReadFileSyncMock = givenMock(fs.readFileSync);

    fsReadFileSyncMock.mockReturnValue(content);
    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should return a passed result if not is true", async() => {
    const condition = new JSONSnapshotMatch(data.any, data, data.options(), true);
    const content = givenReadJSONFile();
    const fsReadFileSyncMock = givenMock(fs.readFileSync);

    fsReadFileSyncMock.mockReturnValueOnce(content);
    fsReadFileSyncMock.mockReturnValueOnce("[]");
    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    const condition = new JSONSnapshotMatch(data.any, data, data.options());
    const content = givenReadJSONFile();
    const fsReadFileSyncMock = givenMock(fs.readFileSync);

    fsReadFileSyncMock.mockReturnValueOnce(content);
    fsReadFileSyncMock.mockReturnValueOnce("[]");
    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    const condition = new JSONSnapshotMatch(data.any, data);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S05: should return a passed result if a valid sort key is given", async() => {
    const condition = new JSONSnapshotMatch(data.any, data, data.options());
    const content1 = givenReadJSONFile();
    const content2 = givenReadJSONFile(data.netfile2);
    const fsReadFileSyncMock = givenMock(fs.readFileSync);

    fsReadFileSyncMock.mockReturnValueOnce(content1);
    fsReadFileSyncMock.mockReturnValueOnce(content2);

    condition.setSortkey("url");
    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S05: should return a passed result for conditional matching with the regex option", async() => {
    const options = { ...data.options(), regex: { paths: ["$..method"], expressions: [data.any] } };
    const condition = new JSONSnapshotMatch(data.any, data, options);
    const template = givenReadJSONFile(data.netfile2);
    const content1 = givenReadJSONFile();
    const parsed = JSON.parse(template);
    const [logout, login] = parsed;
    const modified = { ...logout, method: data.any };
    const content2 = JSON.stringify([modified, login]);
    const fsReadFileSyncMock = givenMock(fs.readFileSync);

    fsReadFileSyncMock.mockReturnValueOnce(content1);
    fsReadFileSyncMock.mockReturnValueOnce(content2);

    condition.setSortkey("url");
    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S06: should return a failed result if an error is encountered during diffing", async() => {
    const options = { ...data.options(), prefilter: () => { throw new Error(); } };
    const condition = new JSONSnapshotMatch(data.any, data, options);
    const content = givenReadJSONFile();
    const fsReadFileSyncMock = givenMock(fs.readFileSync);

    fsReadFileSyncMock.mockReturnValue(content);
    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S07: should return a passed result with the skip compare option", async() => {
    const options = { ...data.options(), skipCompare: true };
    const condition = new JSONSnapshotMatch(data.any, data, options);
    const content = givenReadJSONFile();
    const fsReadFileSyncMock = givenMock(fs.readFileSync);

    fsReadFileSyncMock.mockReturnValueOnce(content);
    fsReadFileSyncMock.mockReturnValueOnce("[]");
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
