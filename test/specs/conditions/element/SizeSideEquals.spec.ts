import { SizeSideEquals } from "@conditions/element/SizeSideEquals";

import { SizeContext } from "@commands/utils/enums";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", selector: "#selector", width: 1, height: 2 };
const { height, width } = data;

describe("@conditions: element/SizeSideEquals constructor", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new SizeSideEquals(SizeContext.WIDTH, data.width);

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

describe("@conditions: element/SizeSideEquals.getResult()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a passed result", async() => {
    const condition = new SizeSideEquals(SizeContext.WIDTH, data.width);
    const element: any = { ...data, getSize: () => width };
    const elementSpy = jest.spyOn(element, "getSize");
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
    expect(elementSpy).toHaveBeenCalledWith(SizeContext.WIDTH);
  });

  it("S02: should return a passed result if not is true", async() => {
    const condition = new SizeSideEquals(SizeContext.WIDTH, data.width, true);
    const element: any = { ...data, getSize: () => height };
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    const condition = new SizeSideEquals(SizeContext.WIDTH, data.width);
    const element: any = { ...data, getSize: () => height };
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    const condition = new SizeSideEquals(SizeContext.WIDTH, data.width);
    const element: any = { ...data, getSize: () => { throw new Error("message");} };
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });
});
