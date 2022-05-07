import { scrollToBottom } from "@commands/browser/scrollToBottom";

import { JS_WINDOW_SCROLL_TO_BOTTOM } from "@commands/utils/constants";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";

describe("@commands: browser/scrollToBottom()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should scroll to the bottom of the page", async() => {
    givenBrowserCommand();

    await browser.scrollToBottom();
    expect(browser.execute).toHaveBeenCalledWith(JS_WINDOW_SCROLL_TO_BOTTOM);
  });
});

function givenBrowserCommand() {
  browser.scrollToBottom = scrollToBottom;
}
