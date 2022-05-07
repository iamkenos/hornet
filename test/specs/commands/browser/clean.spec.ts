import { clean } from "@commands/browser/clean";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";

describe("@commands: browser/clean()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should clean the browser storage", async() => {
    givenBrowserCommand();

    await browser.clean();
    expect(browser.clearLocalStorage).toHaveBeenCalledTimes(1);
    expect(browser.clearSessionStorage).toHaveBeenCalledTimes(1);
    expect(browser.deleteCookies).toHaveBeenCalledTimes(1);
  });
});

function givenBrowserCommand() {
  browser.clean = clean;
}



