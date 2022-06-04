import { ObjectPropEquals } from "@conditions/others/ObjectPropEquals";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", foo: "bar" };

describe("@conditions: others/ObjectPropEquals constructor", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new ObjectPropEquals(data, "any", "any");

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

describe("@conditions: others/ObjectPropEquals.getResult()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a passed result", async() => {
    const condition = new ObjectPropEquals(data, "any", "any");

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should return a passed result if not is true", async() => {
    const condition = new ObjectPropEquals(data, "any", "foo", false);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    const condition = new ObjectPropEquals(data, "any", "foo");

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });
});
