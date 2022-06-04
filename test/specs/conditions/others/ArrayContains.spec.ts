import { ArrayContains } from "@conditions/others/ArrayContains";

import { givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";

describe("@conditions: others/ArrayContains constructor", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new ArrayContains(["1"], ["1"]);

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

describe("@conditions: others/ArrayContains.getResult()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a passed result", async() => {
    const condition = new ArrayContains(["0", "1"], ["1"]);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should return a passed result if not is true", async() => {
    const condition = new ArrayContains(["1"], [1] as any, false);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    const condition = new ArrayContains(["1"], [1] as any);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    Array.prototype.every = jest.fn();
    const mock = givenMock(Array.prototype.every);
    const condition = new ArrayContains(["0", "1"], ["1"]);
    mock.mockImplementation(() => { throw new Error("message"); });

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });
});
