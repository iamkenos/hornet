import { switchToLastWindow } from "@commands/browser/switchToLastWindow";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "foo", bar: "bar" };

describe("@commands: browser/switchToLastWindow()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should should switch control to last window", async() => {
    givenBrowserCommand();

    await browser.switchToLastWindow();
    expect(browser.getWindowHandles).toHaveBeenCalledTimes(1);
    expect(browser.switchToWindow).toHaveBeenCalledTimes(1);
    expect(browser.switchToWindow).toHaveBeenCalledWith(data.bar);
  });
});

function givenBrowserCommand() {
  browser.switchToLastWindow = switchToLastWindow;
  browser.getWindowHandles = jest.fn().mockReturnValueOnce([data.any, data.foo, data.bar]);
}
