import { ArrayEquals } from "@conditions/others/ArrayEquals";

import { givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";

describe("@conditions: others/ArrayEquals constructor", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new ArrayEquals(["1"], ["1"]);

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

describe("@conditions: others/ArrayEquals.getResult()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a passed result", async() => {
    const condition = new ArrayEquals(["1"], ["1"]);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should return a passed result if not is true", async() => {
    const condition = new ArrayEquals(["1"], [1] as any, false);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    const condition = new ArrayEquals(["1"], [1] as any);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    JSON.stringify = jest.fn();
    const mock = givenMock(JSON.stringify);
    const condition = new ArrayEquals(["1"], ["1"]);
    mock.mockImplementation(() => { throw new Error("message"); });

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });
});
