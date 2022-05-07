import { switchToParentWindow } from "@commands/browser/switchToParentWindow";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "foo", bar: "bar" };

describe("@commands: browser/switchToParentWindow()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should switch control to parent window", async() => {
    givenBrowserCommand();

    await browser.switchToParentWindow();
    expect(browser.getWindowHandles).toHaveBeenCalledTimes(1);
    expect(browser.switchToWindow).toHaveBeenCalledTimes(1);
    expect(browser.switchToWindow).toHaveBeenCalledWith(data.any);
  });
});

function givenBrowserCommand() {
  browser.switchToParentWindow = switchToParentWindow;
  browser.getWindowHandles = jest.fn().mockReturnValueOnce([data.any, data.foo, data.bar]);
}
