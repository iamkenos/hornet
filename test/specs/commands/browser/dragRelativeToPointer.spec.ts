import { dragRelativeToPointer } from "@commands/browser/dragRelativeToPointer";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";

describe("@commands: browser/dragRelativeToPointer()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should do a drag action relative to pointer location via actions api", async() => {
    givenBrowserCommand();

    await browser.dragRelativeToPointer({ x: 1, y: 2 }, undefined);
    expect(browser.performActions).toHaveBeenCalledWith(expect.any(Array));
    expect(browser.releaseActions).toHaveBeenCalledTimes(1);
  });
});

function givenBrowserCommand() {
  browser.dragRelativeToPointer = dragRelativeToPointer;
}

