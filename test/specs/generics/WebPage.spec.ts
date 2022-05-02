import { BrowserConditions } from "@conditions/browser";

import demo from "@test/fixtures/pages/demo.meta";
import { DemoPage } from "@test/fixtures/pages/demo.page";
import { EmptyPage } from "@test/fixtures/pages/empty/empty.page";
import { givenBrowserConfig, givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";
const data = new DemoPage();
const empty = new EmptyPage();
let config: typeof browser.config;

describe("@generics: WebPage constructor", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set the properties from metadata upon instantiation", () => {
    const actual = (data as any).properties;
    const expected = demo.default;
    expect(actual).toEqual(expected);
  });

  it("S02: should set the url from metadata upon instantiation", () => {
    const actual = (data as any).url;
    const expected = demo.default.url;
    expect(actual).toEqual(expected);
  });

  it("S03: should set the title from metadata upon instantiation", () => {
    const actual = (data as any).title;
    const expected = demo.default.title;
    expect(actual).toEqual(expected);
  });

  it("S04: should set the labels from metadata upon instantiation", () => {
    const actual = (data as any).labels;
    const expected = demo.default.labels;
    expect(actual).toEqual(expected);
  });

  it("S05: should set the selectors from metadata upon instantiation", () => {
    const actual = (data as any).selectors;
    const expected = demo.default.selectors;
    expect(actual).toEqual(expected);
  });

  it("S06: should set the url as empty upon instantiation if the metadata url is empty", () => {
    const actual = (empty as any).url;
    const expected = "";
    expect(actual).toEqual(expected);
  });

  it("S07: should set the title as empty upon instantiation if the metadata url is empty", () => {
    const actual = (empty as any).url;
    const expected = "";
    expect(actual).toEqual(expected);
  });
});

describe("@generics: WebPage.navigate()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should navigate to the page's url", async() => {
    const browserUrlMock = givenMock(browser.url);

    await data.navigate();
    expect(browserUrlMock).toHaveBeenCalledWith((data as any).url);
  });
});

describe("@generics: WebPage.getTitle()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should get the metadata title", async() => {
    const actual = data.getTitle();
    const expected = demo.default.title;
    expect(actual).toEqual(expected);
  });
});

describe("@generics: WebPage.getUrl()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should get the metadata url", async() => {
    const actual = data.getUrl();
    const expected = demo.default.url;
    expect(actual).toEqual(expected);
  });
});

describe("@generics: WebPage.thenTitleEquals()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should assert the title to be equal the metadata title", async() => {
    const conditions = new BrowserConditions();
    const conditionsSpy = jest.spyOn(conditions, "titleEquals");
    const browserConditionsMock = givenMock(browser.conditions);

    browserConditionsMock.mockReturnValue(conditions);
    await data.thenTitleEquals();
    expect(conditionsSpy).toHaveBeenCalledWith(data.getTitle(), undefined);
  });
});

describe("@generics: WebPage.thenUrlEquals()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should assert the url to be equal the metadata url", async() => {
    const conditions = new BrowserConditions();
    const conditionsSpy = jest.spyOn(conditions, "urlEquals");
    const browserConditionsMock = givenMock(browser.conditions);

    browserConditionsMock.mockReturnValue(conditions);
    await data.thenUrlEquals();
    expect(conditionsSpy).toHaveBeenCalledWith(data.getUrl(), undefined);
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
