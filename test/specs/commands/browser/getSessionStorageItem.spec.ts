import { getSessionStorageItem } from "@commands/browser/getSessionStorageItem";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "foo" };

describe("@commands: browser/getSessionStorageItem()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should get a session storage item value", async() => {
    givenBrowserCommand();

    const actual = await browser.getSessionStorageItem(data.any);
    expect(actual).toEqual(data.foo);
    expect(browser.execute).toHaveBeenCalledWith(expect.any(Function), data.any);
  });
});

function givenBrowserCommand() {
  browser.getSessionStorageItem = getSessionStorageItem;
  browser.execute = jest.fn().mockImplementation((arg) => {try { arg(); } catch(e) { return data.foo; }});
}
