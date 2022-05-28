import { RETRY } from "@gherkin/utils/constants";

import { givenBrowserConfig, givenJestMocksAreReset } from "@test/fixtures/utils/steps";

describe("@gherkin: utils/constants", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
    givenJestMocksAreReset();
  });

  it("S01: should expose a RETRY function", async() => {
    const actual = RETRY();

    expect(actual).toMatchSnapshot();
  });
});

function givenBrowserConfigIsDefined() {
  browser.config = givenBrowserConfig();
  browser.config.stepRetries = 5;
}

function givenBrowserConfigIsUndefined() {
  browser.config = undefined;
}

