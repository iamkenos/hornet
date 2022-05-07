import { setCookie } from "@commands/browser/setCookie";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "foo" };

describe("@commands: browser/setCookie()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set a specified cookie", async() => {
    givenBrowserCommand();

    await browser.setCookie(data.any, data.foo);
    expect(browser.setCookies).toHaveBeenCalledWith({ name: data.any, value: data.foo });
  });
});

function givenBrowserCommand() {
  browser.setCookie = setCookie;
}
