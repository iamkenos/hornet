import { restoreWindowSize } from "@commands/browser/restoreWindowSize";

import { givenBrowserConfig, givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: 1, bar: 2 };

describe("@commands: browser/restoreWindowSize()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
    givenJestMocksAreReset();
  });

  it("S01: should restore window size from browser runtime config", async() => {
    givenBrowserCommand();

    await browser.restoreWindowSize();
    expect(browser.setWindowSize).toHaveBeenCalledWith(data.foo, data.bar);
  });
});

function givenBrowserCommand() {
  browser.restoreWindowSize = restoreWindowSize;
}

function givenBrowserConfigIsDefined() {
  browser.config = givenBrowserConfig();
  browser.config.runtime.windowSize = { width: data.foo, height: data.bar };
}

function givenBrowserConfigIsUndefined() {
  browser.config = undefined;
}
