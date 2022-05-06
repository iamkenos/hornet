import { StorageItemEquals } from "@conditions/browser/StorageItemEquals";

import { BrowserStorage } from "@commands/utils/enums";

import { givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "foo", bar: "bar" };

describe("@conditions: browser/StorageItemEquals constructor", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new StorageItemEquals(BrowserStorage.LOCAL, data.any, data.any);

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
      (condition as any).key,
    ];
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/StorageItemEquals.getResult()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a passed result", async() => {
    const browserMock = givenMock(browser.getLocalStorageItem).mockReturnValue(data.foo);
    const condition = new StorageItemEquals(BrowserStorage.LOCAL, data.any, data.foo);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
    expect(browserMock).toHaveBeenCalledWith(data.any);
  });

  it("S02: should return a passed result if not is true", async() => {
    givenMock(browser.getSessionStorageItem).mockReturnValue(data.foo);
    const condition = new StorageItemEquals(BrowserStorage.SESSION, data.any, undefined, true);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    givenMock(browser.getLocalStorageItem).mockReturnValue(data.foo);
    const condition = new StorageItemEquals(BrowserStorage.LOCAL, data.any, data.bar);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    givenMock(browser.getLocalStorageItem).mockImplementation(() => { throw new Error("message");});
    const condition = new StorageItemEquals(BrowserStorage.LOCAL, data.any, data.bar);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });
});
