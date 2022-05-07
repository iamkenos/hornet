import { storeWindowSize } from "@commands/browser/storeWindowSize";

import { givenBrowserConfig, givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "foo", bar: "bar" };

describe("@commands: browser/storeWindowSize()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
    givenJestMocksAreReset();
  });

  it("S01: should store window size in browser runtime config", async() => {
    givenBrowserCommand();

    await browser.storeWindowSize();
    expect(browser.getWindowSize).toHaveBeenCalledTimes(1);
    expect(browser.config.runtime.windowSize).toEqual(data.any);
  });
});

function givenBrowserCommand() {
  browser.storeWindowSize = storeWindowSize;
  browser.getWindowSize = jest.fn().mockReturnValueOnce(data.any);
}

function givenBrowserConfigIsDefined() {
  browser.config = givenBrowserConfig();
}

function givenBrowserConfigIsUndefined() {
  browser.config = undefined;
}
