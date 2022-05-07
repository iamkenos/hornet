import { setSessionStorageItem } from "@commands/browser/setSessionStorageItem";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "foo" };

describe("@commands: browser/setSessionStorageItem()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set an item into the browser's session storage", async() => {
    givenBrowserCommand();

    await browser.setSessionStorageItem({ key: data.any, value: data.foo});
    expect(browser.execute).toHaveBeenCalledWith(expect.any(Function), data.any, data.foo);
  });
});

function givenBrowserCommand() {
  browser.setSessionStorageItem = setSessionStorageItem;
  browser.execute = jest.fn().mockImplementation((arg) => {try { arg(); } catch(e) { console.error(e);}});
}
