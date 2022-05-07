import { closeLastWindow } from "@commands/browser/closeLastWindow";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "foo", bar: "bar" };

describe("@commands: browser/closeLastWindow()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should close the last window and return to the parent for control", async() => {
    givenBrowserCommand();

    await browser.closeLastWindow();
    expect(browser.getWindowHandles).toHaveBeenCalledTimes(1);
    expect(browser.switchToWindow).toHaveBeenNthCalledWith(1, data.bar);
    expect(browser.closeWindow).toHaveBeenCalledTimes(1);
    expect(browser.switchToWindow).toHaveBeenNthCalledWith(2, data.any);
  });
});

function givenBrowserCommand() {
  browser.closeLastWindow = closeLastWindow;
  browser.getWindowHandles = jest.fn().mockReturnValue([data.any, data.foo, data.bar]);
}
