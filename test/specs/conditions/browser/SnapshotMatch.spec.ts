import { SnapshotMatch } from "@conditions/browser/SnapshotMatch";

import merge from "lodash/merge";

import { AllureAdapter } from "@common/utils/AllureAdapter";
import { ImageCompareContext } from "@commands/utils/enums";

import { givenBrowserConfig, givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";
const data = {
  any: "any",
  element: { selector: "#selector" },
  options: () => {
    const options = merge({}, browser.config.snapshots.images);
    options.outDir = "ouput";
    options.actualDir = options.outDir + "/actual";
    options.baselineDir = options.outDir + "/baseline";
    options.diffDir = options.outDir + "/diff";
    return options;
  },
};
let config: typeof browser.config;

jest.mock("@common/utils/AllureAdapter", () => ({ AllureAdapter: { attachImage: () => jest.fn() }}));
describe("@conditions: browser/SnapshotMatch constructor", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new SnapshotMatch(ImageCompareContext.ELEMENT, data.any, data.options());

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
      (condition as any).options,
      (condition as any).context
    ];
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/SnapshotMatch.buildFilename()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should build the filename depending on available browser capabilities", async() => {
    const condition = new SnapshotMatch(ImageCompareContext.ELEMENT, data.any, data.options());

    const actual = await (condition as any).buildFilename(data.any);
    expect(actual).toMatchSnapshot();
  });

  it("S02: should build the filename for mobile if device name is found", async() => {
    const ogcaps = merge({}, browser.capabilities);
    (browser.capabilities as any).deviceName = "Google Pixel 6";
    (browser.capabilities as any).browserVersion = undefined;
    const condition = new SnapshotMatch(ImageCompareContext.ELEMENT, data.any, data.options());

    const actual = await (condition as any).buildFilename(data.any);
    expect(actual).toMatchSnapshot();
    browser.capabilities = ogcaps;
  });

  it("S03: should build the filename for specific platform if usePlatformDir is true", async() => {
    const options = { ...data.options(), usePlatformDir: true };
    const condition = new SnapshotMatch(ImageCompareContext.ELEMENT, data.any, options);

    const actual = await (condition as any).buildFilename(data.any);
    expect(actual).toMatchSnapshot();
  });
});


describe("@conditions: browser/SnapshotMatch.compare()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should compare the element snapshot", async() => {
    const { element, viewport, page, pause, attach } = givenCompareSnapshotSpies();
    const filename = data.any;
    const tag = givenFilenameAsTag(filename);
    const condition = new SnapshotMatch(ImageCompareContext.ELEMENT, filename, data.options());

    const actual = await (condition as any).compare(data.any, data.options(), ImageCompareContext.ELEMENT, data.element);
    expect(actual).toMatchSnapshot();
    expect(pause).not.toHaveBeenCalled();
    expect(page).not.toHaveBeenCalled();
    expect(viewport).not.toHaveBeenCalled();
    expect(element).toHaveBeenCalledWith(data.element, tag, data.options());
    expect(attach).toHaveBeenCalledTimes(3);
  });

  it("S02: should compare the page snapshot", async() => {
    const { element, viewport, page, pause, attach } = givenCompareSnapshotSpies();
    const filename = data.any;
    const tag = givenFilenameAsTag(filename);
    const condition = new SnapshotMatch(ImageCompareContext.PAGE, filename, data.options());

    const actual = await (condition as any).compare(data.any, data.options(), ImageCompareContext.PAGE, data.element);
    expect(actual).toMatchSnapshot();
    expect(pause).not.toHaveBeenCalled();
    expect(page).toHaveBeenCalledWith(tag, data.options());
    expect(viewport).not.toHaveBeenCalled();
    expect(element).not.toHaveBeenCalled();
    expect(attach).toHaveBeenCalledTimes(3);
  });

  it("S03: should compare the viewport snapshot", async() => {
    const { element, viewport, page, pause, attach } = givenCompareSnapshotSpies();
    const filename = data.any;
    const tag = givenFilenameAsTag(filename);
    const condition = new SnapshotMatch(ImageCompareContext.VIEWPORT, filename, data.options());

    const actual = await (condition as any).compare(data.any, data.options(), ImageCompareContext.VIEWPORT, data.element);
    expect(actual).toMatchSnapshot();
    expect(pause).not.toHaveBeenCalled();
    expect(page).not.toHaveBeenCalled();
    expect(viewport).toHaveBeenCalledWith(tag, data.options());
    expect(element).not.toHaveBeenCalled();
    expect(attach).toHaveBeenCalledTimes(3);
  });

  it("S04: should assign an error prop on the compare result if an error is encountered", async() => {
    const { element, page, pause, attach } = givenCompareSnapshotSpies();
    const viewport = givenMock(browser.checkScreen).mockImplementation(() => { throw new Error("message"); });
    const filename = data.any;
    const tag = givenFilenameAsTag(filename);
    const condition = new SnapshotMatch(ImageCompareContext.VIEWPORT, filename, data.options());

    const actual = await (condition as any).compare(data.any, data.options(), ImageCompareContext.VIEWPORT, data.element);
    expect(actual).toMatchSnapshot();
    expect(pause).not.toHaveBeenCalled();
    expect(page).not.toHaveBeenCalled();
    expect(viewport).toHaveBeenCalledWith(tag, data.options());
    expect(element).not.toHaveBeenCalled();
    expect(attach).toHaveBeenCalledTimes(3);
  });

  it("S05: should skip comparison if skipCompare is true", async() => {
    const { element, viewport, page, pause, attach } = givenCompareSnapshotSpies();
    const condition = new SnapshotMatch(ImageCompareContext.PAGE, data.any, data.options());

    const actual = await (condition as any).compare(data.any, { ...data.options(), skipCompare: true }, ImageCompareContext.PAGE, data.element);
    expect(actual).toMatchSnapshot();
    expect(pause).toHaveBeenCalled();
    expect(page).toHaveBeenCalled();
    expect(viewport).not.toHaveBeenCalled();
    expect(element).not.toHaveBeenCalled();
    expect(attach).toHaveBeenCalledTimes(1);
  });
});

describe("@conditions: browser/SnapshotMatch.getResult()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should return a passed result", async() => {
    const condition = new SnapshotMatch(ImageCompareContext.PAGE, data.any, data.options());
    const conditionCompareSpy = jest.spyOn(condition, "compare" as any);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
    expect(conditionCompareSpy).toHaveBeenCalledTimes(1);
  });

  it("S02: should return a passed result if not is true", async() => {
    const condition = new SnapshotMatch(ImageCompareContext.PAGE, data.any, data.options(), false);
    givenMock(browser.checkFullPageScreen).mockReturnValue({ misMatchPercentage: 0.1 });

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    const condition = new SnapshotMatch(ImageCompareContext.PAGE, data.any, data.options());
    givenMock(browser.checkFullPageScreen).mockReturnValue({ misMatchPercentage: 0.1 });

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    const condition = new SnapshotMatch(ImageCompareContext.PAGE, undefined, data.options());
    String.prototype.substring = jest.fn();
    givenMock(String.prototype.substring).mockImplementation(() => { throw new Error("message"); });

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S05: should return a failed result if diff error is defined", async() => {
    const condition = new SnapshotMatch(ImageCompareContext.PAGE, data.any, data.options());
    givenMock(browser.checkFullPageScreen).mockImplementation(() => { throw new Error("message"); });

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S06: should return a passed result if skipCompare is true", async() => {
    const condition = new SnapshotMatch(ImageCompareContext.PAGE, data.any, { ...data.options(), skipCompare: true });
    givenMock(browser.checkFullPageScreen).mockReturnValue({ misMatchPercentage: 0.1 });

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

function givenCompareSnapshotSpies() {
  return {
    pause: jest.spyOn(browser, "pause"),
    element: jest.spyOn(browser, "checkElement"),
    viewport: jest.spyOn(browser, "checkScreen"),
    page: jest.spyOn(browser, "checkFullPageScreen"),
    attach: jest.spyOn(AllureAdapter, "attachImage")
  };
}

function givenFilenameAsTag(filename: string) {
  return filename.substring(0, filename.lastIndexOf("."));
}
