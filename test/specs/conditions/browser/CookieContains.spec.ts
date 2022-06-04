import { CookieContains } from "@conditions/browser/CookieContains";

import { givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "foo", bar: "bar" };

describe("@conditions: browser/CookieContains constructor", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new CookieContains(data.any, data.any);

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

describe("@conditions: browser/CookieContains.getResult()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a passed result", async() => {
    const browserMock = givenMock(browser.getCookies).mockReturnValue([{ name: data.any, value: data.foo }]);
    const condition = new CookieContains(data.foo, undefined);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
    expect(browserMock).toHaveBeenCalledWith([data.foo]);
  });

  it("S02: should return a passed result if not is true", async() => {
    givenMock(browser.getCookies).mockReturnValue([{ name: data.any, value: data.foo }]);
    const condition = new CookieContains(data.foo, data.bar, false);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    givenMock(browser.getCookies).mockReturnValue([{ name: data.any, value: data.foo }]);
    const condition = new CookieContains(data.foo, data.bar);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    givenMock(browser.getCookies).mockImplementation(() => { throw new Error("message");});
    const condition = new CookieContains(data.foo, data.bar);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S05: should return a failed result if cookie is undefined", async() => {
    givenMock(browser.getCookies).mockReturnValue([undefined]);
    const condition = new CookieContains(data.foo, data.bar);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });
});
