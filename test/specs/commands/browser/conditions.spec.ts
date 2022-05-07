import { conditions } from "@commands/browser/conditions";

import { BrowserConditions } from "@conditions/browser";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";

describe("@commands: browser/conditions()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a browser conditions instance", async() => {
    givenBrowserCommand();

    const actual = await browser.conditions();
    expect(actual).toEqual(new BrowserConditions());
  });
});

function givenBrowserCommand() {
  browser.conditions = conditions;
}
