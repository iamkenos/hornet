import { clickCoordinates } from "@commands/browser/clickCoordinates";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";

describe("@commands: browser/clickCoordinates()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should click specified coordiantes via actions api", async() => {
    givenBrowserCommand();

    await browser.clickCoordinates({ x: 1, y: 2 }, undefined);
    expect(browser.performActions).toHaveBeenCalledWith(expect.any(Array));
    expect(browser.releaseActions).toHaveBeenCalledTimes(1);
  });
});

function givenBrowserCommand() {
  browser.clickCoordinates = clickCoordinates;
}
