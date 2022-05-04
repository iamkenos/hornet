import { DocumentReady } from "@conditions/browser/DocumentReady";

import { JS_DOCUMENT_READY_STATE } from "@commands/utils/constants";

import { givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "foo", bar: "bar", complete: "complete" };

describe("@conditions: element/DocumentReady constructor", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new DocumentReady();

    const actual = [
      (condition as any).name,
      (condition as any).not,
      (condition as any).timeout,
      (condition as any).expected,
      (condition as any).actual,
      (condition as any).passed,
      (condition as any).result,
      (condition as any).on,
      (condition as any).element,
    ];
    expect(actual).toMatchSnapshot();
  });
});

describe("@conditions: browser/DocumentReady.getResult()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a passed result", async() => {
    const browserMock = givenMock(browser.execute).mockReturnValue(data.complete);
    const condition = new DocumentReady();

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
    expect(browserMock).toHaveBeenCalledWith(JS_DOCUMENT_READY_STATE);
  });

  it("S02: should return a passed result if not is true", async() => {
    givenMock(browser.execute).mockReturnValue(data.foo);
    const condition = new DocumentReady(true);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    givenMock(browser.execute).mockReturnValue(data.foo);
    const condition = new DocumentReady();

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    givenMock(browser.execute).mockImplementation(() => { throw new Error("message");});
    const condition = new DocumentReady();

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });
});
