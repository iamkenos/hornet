import { scrollTo } from "@commands/browser/scrollTo";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: 1, bar: 2 };

describe("@commands: browser/scrollTo()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should scroll to the specified coordinates", async() => {
    givenBrowserCommand();

    await browser.scrollTo({ x: data.foo, y: data.bar });
    expect(browser.execute).toHaveBeenCalledWith(expect.any(Function), data.foo, data.bar);
  });
});

function givenBrowserCommand() {
  browser.scrollTo = scrollTo;
  browser.execute = jest.fn().mockImplementation((arg) => {try { arg(); } catch(e) { console.error(e);}});
}
