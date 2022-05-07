import { getLocalStorageItem } from "@commands/browser/getLocalStorageItem";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "foo" };

describe("@commands: browser/getLocalStorageItem()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should get a local storage item value", async() => {
    givenBrowserCommand();

    const actual = await browser.getLocalStorageItem(data.any);
    expect(actual).toEqual(data.foo);
    expect(browser.execute).toHaveBeenCalledWith(expect.any(Function), data.any);
  });
});

function givenBrowserCommand() {
  browser.getLocalStorageItem = getLocalStorageItem;
  browser.execute = jest.fn().mockImplementation((arg) => {try { arg(); } catch(e) { return data.foo; }});
}
