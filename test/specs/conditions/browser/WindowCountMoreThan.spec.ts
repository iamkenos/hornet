import { WindowCountMoreThan } from "@conditions/browser/WindowCountMoreThan";

import { givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: 1 };

describe("@conditions: element/WindowCountMoreThan constructor", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new WindowCountMoreThan(data.foo);

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

describe("@conditions: browser/WindowCountMoreThan.getResult()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a passed result", async() => {
    const browserMock = givenBrowserHandlesMock();
    const condition = new WindowCountMoreThan(data.foo);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
    expect(browserMock).toHaveBeenCalledTimes(1);
  });

  it("S02: should return a passed result if not is true", async() => {
    givenBrowserHandlesMock(1);
    const condition = new WindowCountMoreThan(data.foo, true);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    givenBrowserHandlesMock(1);
    const condition = new WindowCountMoreThan(data.foo);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    givenBrowserHandlesThrowsError();
    const condition = new WindowCountMoreThan(data.foo);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });
});

function givenBrowserHandlesMock(count = 2) {
  return givenMock(browser.getWindowHandles).mockReturnValue(Array(count).fill(data));
}

function givenBrowserHandlesThrowsError() {
  return givenMock($$).mockImplementation(() => { throw new Error("message");});
}
