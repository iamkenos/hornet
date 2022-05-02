import { ObjectEquals } from "@conditions/others/ObjectEquals";

import { givenJestMocksAreReset, givenMock } from "@test/fixtures/utils/steps";
const data = { any: "any" };

describe("@conditions: others/ObjectEquals constructor", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new ObjectEquals(data, data);

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

describe("@conditions: others/ObjectEquals.getResult()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a passed result", async() => {
    const condition = new ObjectEquals(data, data);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S02: should return a passed result if not is true", async() => {
    const condition = new ObjectEquals(data, { ...data, foo: "foo" }, true);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    const condition = new ObjectEquals(data, { ...data, foo: "foo" });

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    JSON.stringify = jest.fn();
    const mock = givenMock(JSON.stringify);
    const condition = new ObjectEquals({ foo: "foo"}, { foo: "foo"});
    mock.mockImplementation(() => { throw new Error("message"); });

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });
});
