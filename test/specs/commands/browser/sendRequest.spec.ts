import { sendRequest } from "@commands/browser/sendRequest";

import got from "got";

import { givenBrowserConfig, givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", url: () => browser.config.baseUrl };

jest.mock("got");
describe("@commands: browser/sendRequest()", () => {
  beforeEach(() => {
    givenBrowserConfigIsDefined();
  });

  afterEach(() => {
    givenBrowserConfigIsUndefined();
    givenJestMocksAreReset();
  });

  it("S01: should send an http request to a url relative to the base url", async() => {
    givenBrowserCommand();

    await browser.sendRequest(data.any);
    expect(got).toHaveBeenCalledWith(data.url() + "/" + data.any, { throwHttpErrors: false, url: undefined });
  });

  it("S02: should send an http request to a specified url", async() => {
    givenBrowserCommand();

    await browser.sendRequest(data.url(), { body: data.any });
    expect(got).toHaveBeenCalledWith(data.url(), { body: data.any, throwHttpErrors: false, url: undefined });
  });

  it("S03: should wait before sending a request", async() => {
    givenBrowserCommand();

    await browser.sendRequest(data.url(), undefined, { pre: 1 });
    expect(got).toHaveBeenCalled();
  });

  it("S04: should wait after sending a request", async() => {
    givenBrowserCommand();

    await browser.sendRequest(data.url(), undefined, { post: 1 });
    expect(got).toHaveBeenCalled();
  });
});

function givenBrowserCommand() {
  browser.sendRequest = sendRequest;
  // @ts-ignore
  got = jest.fn().mockReturnValue({ time: 100, request: {} });
}

function givenBrowserConfigIsDefined() {
  browser.config = givenBrowserConfig();
}

function givenBrowserConfigIsUndefined() {
  browser.config = undefined;
}
