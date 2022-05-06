import { UrlEquals } from "@conditions/browser/UrlEquals";

import { givenBrowserConfig, givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "http://localhost:8080/login", bar: "/login", baz: "/logout", };
let config: typeof browser.config;

describe("@conditions: browser/UrlEquals constructor", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new UrlEquals(data.any);

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

describe("@conditions: browser/UrlEquals.getResult()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenJestMocksAreReset();
    givenBrowserConfigIsUndefined();
  });

  it("S01: should return a passed result", async() => {
    const browserMock = givenMock(browser.getUrl).mockReturnValue(data.foo);
    const condition = new UrlEquals(data.foo);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
    expect(browserMock).toHaveBeenCalledTimes(1);
  });

  it.each([
    { id: "A", expected: data.baz, returned: data.foo },
    { id: "B", expected: undefined, returned: data.foo },
  ])("S02$id: should return a passed result if not is true", async({ expected, returned }) => {
    givenMock(browser.getUrl).mockReturnValue(returned);
    const condition = new UrlEquals(expected, true);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    givenMock(browser.getUrl).mockReturnValue(data.foo);
    const condition = new UrlEquals(data.baz);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    givenMock(browser.getUrl).mockImplementation(() => { throw new Error("message");});
    const condition = new UrlEquals(data.foo);

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
