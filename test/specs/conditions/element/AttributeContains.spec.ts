import { AttributeContains } from "@conditions/element/AttributeContains";

import { givenJestMocksAreReset } from "@test/fixtures/utils/steps";
const data = { any: "any", selector: "#selector", foo: "foo", bar: "bar" };

describe("@conditions: element/AttributeContains constructor", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should set properties upon instantiation", async() => {
    const condition = new AttributeContains(data.any, data.any);

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

describe("@conditions: element/AttributeContains.getResult()", () => {
  afterEach(() => {
    givenJestMocksAreReset();
  });

  it("S01: should return a passed result", async() => {
    const condition = new AttributeContains(data.foo, "");
    const element: any = { ...data, getAttribute: () => data.bar };
    const elementSpy = jest.spyOn(element, "getAttribute");
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
    expect(elementSpy).toHaveBeenCalledWith(data.foo);
  });

  it("S02: should return a passed result if not is true", async() => {
    const condition = new AttributeContains(data.foo, data.any, false);
    const element: any = { ...data, getAttribute: () => data.bar };
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S03: should return a failed result if condition is not met", async() => {
    const condition = new AttributeContains(data.foo, data.any);
    const element: any = { ...data, getAttribute: () => data.bar };
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });

  it("S04: should return a failed result if an error is encountered", async() => {
    const condition = new AttributeContains(data.foo, data.any);
    const element: any = { ...data, getAttribute: () => { throw new Error("message");} };
    condition.setElement(element);

    const actual = await (condition as any).getResult();
    expect(actual).toMatchSnapshot();
  });
});
