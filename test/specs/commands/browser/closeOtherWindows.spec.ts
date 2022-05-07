import { closeOtherWindows } from "@commands/browser/closeOtherWindows";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "foo", bar: "bar" };

describe("@commands: browser/closeOtherWindows()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should close all other windows except the parent", async() => {
    givenBrowserCommand();

    await browser.closeOtherWindows();
    expect(browser.getWindowHandles).toHaveBeenCalledTimes(3);
    expect(browser.closeWindow).toHaveBeenCalledTimes(2);
    expect(browser.switchToWindow).toHaveBeenLastCalledWith(data.any);
  });
});

function givenBrowserCommand() {
  browser.closeOtherWindows = closeOtherWindows;
  browser.getWindowHandles = jest.fn()
    .mockReturnValueOnce([data.any, data.foo, data.bar])
    .mockReturnValueOnce([data.any, data.bar])
    .mockReturnValueOnce([data.any]);
}
