import { scrollToTop } from "@commands/browser/scrollToTop";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";

describe("@commands: browser/scrollToTop()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should scroll to top bottom of the page", async() => {
    givenBrowserCommand();

    await browser.scrollToTop();
    expect(browser.execute).toHaveBeenCalledWith(expect.any(Function), 0, 0);
  });
});

function givenBrowserCommand() {
  browser.scrollToTop = scrollToTop;
  browser.execute = jest.fn().mockImplementation((arg) => {try { arg(); } catch(e) { console.error(e);}});
}
