import { AxisLocationEquals } from "@conditions/element/AxisLocationEquals";

import { Axis } from "@commands/utils/enums";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", selector: "#selector", x: 1, y: 2 };
const { x, y } = data;

describe("@conditions: element/AxisLocationEquals constructor", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new AxisLocationEquals(Axis.X, x);

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

describe("@conditions: element/AxisLocationEquals.getResult()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a passed result", async() => {
    const condition = new AxisLocationEquals(Axis.X, x);
    const element: any = { ...data, getLocation: () => x };
    const elementSpy = jest.spyOn(element, "getLocation");
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
    expect(elementSpy).toHaveBeenCalledWith(Axis.X);
  });

  it("S02: should return a passed result if not is true", async() => {
    const condition = new AxisLocationEquals(Axis.X, x, true);
    const element: any = { ...data, getLocation: () => y };
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    const condition = new AxisLocationEquals(Axis.X, x);
    const element: any = { ...data, getLocation: () => y };
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    const condition = new AxisLocationEquals(Axis.X, x);
    const element: any = { ...data, getLocation: () => { throw new Error("message");} };
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });
});
