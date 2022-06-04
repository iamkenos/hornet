import { StringEquals } from "@conditions/others/StringEquals";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "foo" };

describe("@conditions: others/StringEquals constructor", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new StringEquals(data.any, data.any);

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

describe("@conditions: others/StringEquals.getResult()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a passed result", async() => {
    const condition = new StringEquals(data.any, data.any);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should return a passed result if not is true", async() => {
    const condition = new StringEquals(data.any, data.foo, false);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    const condition = new StringEquals(data.any, data.foo);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });
});
