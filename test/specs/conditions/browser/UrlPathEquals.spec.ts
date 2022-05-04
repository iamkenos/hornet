import { UrlPathEquals } from "@conditions/browser/UrlPathEquals";

import { givenBrowserConfig, givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "http://localhost:8080/login", bar: "/login", baz: "/logout" };
let config: typeof browser.config;

describe("@conditions: element/UrlPathEquals constructor", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new UrlPathEquals(data.any);

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
    ];
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/UrlPathEquals.getResult()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should return a passed result", async() => {
    const browserMock = givenMock(browser.getUrl).mockReturnValue(data.foo);
    const condition = new UrlPathEquals(data.bar);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
    expect(browserMock).toHaveBeenCalledTimes(1);
  });

  it("S02: should return a passed result if not is true", async() => {
    givenMock(browser.getUrl).mockReturnValue(data.foo);
    const condition = new UrlPathEquals(undefined, true);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    givenMock(browser.getUrl).mockReturnValue(data.foo);
    const condition = new UrlPathEquals(data.baz);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    givenMock(browser.getUrl).mockImplementation(() => { throw new Error("message");});
    const condition = new UrlPathEquals(data.baz);

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
