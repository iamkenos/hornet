import { SizeEquals } from "@conditions/element/SizeEquals";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", selector: "#selector", width: 1, height: 2 };
const { height, width } = data;

describe("@conditions: element/SizeEquals constructor", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new SizeEquals(data.width, data.height);

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

describe("@conditions: element/SizeEquals.getResult()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a passed result", async() => {
    const condition = new SizeEquals(width, height);
    const element: any = { ...data, getSize: () => ({ width, height }) };
    const elementSpy = jest.spyOn(element, "getSize");
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
    expect(elementSpy).toHaveBeenCalledWith(undefined);
  });

  it("S02: should return a passed result if not is true", async() => {
    const condition = new SizeEquals(height, width, true);
    const element: any = { ...data, getSize: () => ({ width, height }) };
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    const condition = new SizeEquals(height, width);
    const element: any = { ...data, getSize: () => ({ width, height }) };
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    const condition = new SizeEquals(width, height);
    const element: any = { ...data, getSize: () => { throw new Error("message");} };
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });
});
