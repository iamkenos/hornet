import { clearLocalStorage } from "@commands/browser/clearLocalStorage";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";

describe("@commands: browser/clearLocalStorage()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should clear the browser local storage", async() => {
    givenBrowserCommand();

    await browser.clearLocalStorage();
    expect(browser.execute).toHaveBeenCalledWith(expect.any(Function));
  });
});

function givenBrowserCommand() {
  browser.clearLocalStorage = clearLocalStorage;
  browser.execute = jest.fn().mockImplementation((arg) => {try { arg(); } catch(e) { console.error(e);}});
}
