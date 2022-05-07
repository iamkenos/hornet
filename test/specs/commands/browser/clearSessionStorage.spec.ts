import { clearSessionStorage } from "@commands/browser/clearSessionStorage";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";

describe("@commands: browser/clearSessionStorage()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should clear the browser session storage", async() => {
    givenBrowserCommand();

    await browser.clearSessionStorage();
    expect(browser.execute).toHaveBeenCalledWith(expect.any(Function));
  });
});

function givenBrowserCommand() {
  browser.clearSessionStorage = clearSessionStorage;
  browser.execute = jest.fn().mockImplementation((arg) => {try { arg(); } catch(e) { console.error(e);}});
}
