import { GherkinAdapter } from "@gherkin/utils/GherkinAdapter";

import { DateTime } from "luxon";
import { DataTable } from "@cucumber/cucumber";

import { givenBrowserConfig, givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = {
  table: {
    rows: [
      {
        cells: [
          {
            value: "Field"
          },
          {
            value: "Value"
          }
        ]
      },
      {
        cells: [
          {
            value: "InputText"
          },
          {
            value: "Sam Porter"
          }
        ]
      },
      {
        cells: [
          {
            value: "InputEmail"
          },
          {
            value: "samporter@bridges.com"
          }
        ]
      },
      {
        cells: [
          {
            value: "InputPassword"
          },
          {
            value: "unger"
          }
        ]
      }
    ]
  }
};

describe("@gherkin: utils/GherkinAdapter.parseToken()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
    givenJestMocksAreReset();
  });

  it.each`
    token                              | expected
    ${"$CONF{cucumberOpts.snippets};"} | ${"true"}
    ${"$CONF{cucumberOpts.foo};"}      | ${"null"}
    ${"foo$CONF{baseUrl};bar"}         | ${"foohttp://localhost:8080bar"}
  `("S01: should return a parsed CONF token: $token", async({ token, expected }) => {
    const actual = GherkinAdapter.parseToken(token);
    expect(actual).toEqual(expected);
  });

  it.each`
    token                         | less | more
    ${"$DATE{dd-M-yyyy};"}        | ${1} | ${-1}
    ${"$DATE{dd-M-yyyy¦2};"}      | ${2} | ${1}
    ${"$DATE{dd-M-yyyy¦2¦days};"} | ${2} | ${1}
  `("S02: should return a parsed DATE token: $token", async({ token, less, more }) => {
    const parsed = GherkinAdapter.parseToken(token);
    const actual = DateTime.fromFormat(parsed, "dd-M-yyyy").diff(DateTime.now(), ["days"]).days;

    expect(actual).toBeLessThan(less);
    expect(actual).not.toBeLessThan(more);
  });

  it.each`
    token                        | value        | expected
    ${"$ENV{PUBLIC_URL};"}       | ${undefined} | ${""}
    ${"$ENV{PUBLIC_URL};"}       | ${"/"}       | ${"/"}
    ${"foo$ENV{PUBLIC_URL};bar"} | ${"/"}       | ${"foo/bar"}
  `("S03: should return a parsed ENV token: $token", async({ token, value, expected }) => {
    process.env.PUBLIC_URL = value;

    const actual = GherkinAdapter.parseToken(token);
    expect(actual).toEqual(expected);
  });

  it.each`
    token                     | expected
    ${"$RAND{10};"}           | ${10}
    ${"$RAND{10¦base64};"}    | ${10}
    ${"foo$RAND{10¦abc};bar"} | ${16}
  `("S04: should return a parsed RAND token: $token", async({ token, expected }) => {
    const actual = GherkinAdapter.parseToken(token);
    expect(actual.length).toEqual(expected);
  });

  it.each`
    token                    | expected
    ${"foo$ANY{10¦abc};bar"} | ${16}
  `("S05: should return the same token if it doesn't yield any matches: $token", async({ token }) => {
    const actual = GherkinAdapter.parseToken(token);
    const expected = token;
    expect(actual).toEqual(expected);
  });
});

describe("@gherkin: utils/GherkinAdapter.getDataTableRows()", () => {
  it("S01: should return the data table rows for the first column, without the header", async() => {
    const actual = GherkinAdapter.getDataTableRows(new DataTable(data.table));
    expect(actual).toMatchSnapshot();
  });

  it("S02: should return the data table rows for the second column, without the header", async() => {
    const actual = GherkinAdapter.getDataTableRows(new DataTable(data.table), 2);
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return all the data table rows, without the header", async() => {
    const actual = GherkinAdapter.getDataTableRows(new DataTable(data.table), "all");
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return empty if column number asked is non-existing", async() => {
    const actual = GherkinAdapter.getDataTableRows(new DataTable(data.table), 3);
    expect(actual).toEqual([]);
  });
});

describe("@gherkin: utils/GherkinAdapter.getDataTableHashes()", () => {
  it("S01: should return the key-value pair of the data table", async() => {
    const actual = GherkinAdapter.getDataTableHashes(new DataTable(data.table));
    expect(actual).toMatchSnapshot();
  });

  it("S02: should return the key-value pair of the data table in lowercase keys", async() => {
    const actual = GherkinAdapter.getDataTableHashes(new DataTable(data.table), true);
    expect(actual).toMatchSnapshot();
  });
});

function givenBrowserConfigIsDefined() {
  browser.config = givenBrowserConfig();
}

function givenBrowserConfigIsUndefined() {
  browser.config = undefined;
}
