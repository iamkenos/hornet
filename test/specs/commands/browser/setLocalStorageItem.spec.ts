import { setLocalStorageItem } from "@commands/browser/setLocalStorageItem";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "foo" };

describe("@commands: browser/setLocalStorageItem()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set an item into the browser's local storage", async() => {
    givenBrowserCommand();

    await browser.setLocalStorageItem({ key: data.any, value: data.foo});
    expect(browser.execute).toHaveBeenCalledWith(expect.any(Function), data.any, data.foo);
  });
});

function givenBrowserCommand() {
  browser.setLocalStorageItem = setLocalStorageItem;
  browser.execute = jest.fn().mockImplementation((arg) => {try { arg(); } catch(e) { console.error(e);}});
}
